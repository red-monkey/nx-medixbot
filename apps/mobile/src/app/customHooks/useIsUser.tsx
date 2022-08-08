import { IUser} from '../apollo/GraphQL/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginMutation } from '@medixbot/types';
import { useState } from 'react';
export const useIsUser = (): [
  (user: LoginMutation['login']['user']) => Promise<void>,
  () => IUser,
  () => void,
] => {
  const [user,setUserData] = useState<IUser>()
  const setUser = async (user: IUser) => {
    const userJSON = JSON.stringify(user);
    try {
        await AsyncStorage.setItem('user', userJSON);
    } catch (e) {
      console.error(e);
    }
  };

  const getUser =  () => {
    try {
         AsyncStorage.getItem('user').then(user => setUserData(JSON.parse(user)));;
      }
    catch (e) {
      console.error(e);
    }
    return user;
  };

  const deleteUserData= async () => {
    await AsyncStorage.removeItem('user');
  }
  return [setUser, getUser, deleteUserData];
};
