import { IUser} from '../apollo/GraphQL/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useIsUser = (): [
  (user: IUser) => Promise<void>,
  () => Promise<string | null | undefined>,
  () => void,
] => {
  const setUser = async (user: IUser) => {
    const userJSON = JSON.stringify(user);
    try {
        await AsyncStorage.setItem('user', userJSON);
    } catch (e) {
      console.error(e);
    }
  };

  const getUser = async () => {
    let user;
    try {
        user = await AsyncStorage.getItem('user');
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
