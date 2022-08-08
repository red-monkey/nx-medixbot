import {IToken, TokenType} from '../apollo/GraphQL/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const useAccessToken = (): [
  (token: IToken, type: TokenType) => Promise<void>,
  (type: TokenType) => string,
  () => void,
] => {
  const [token,setToken] = useState<string>('')
  const setAuthToken = async (token: IToken, type: TokenType) => {
    const tokenJSON = JSON.stringify(token);
    try {
      if (type === 'accessToken') {
        await AsyncStorage.setItem('accessToken', tokenJSON);
      } else if (type === 'refreshToken') {
        await AsyncStorage.setItem('refreshToken', tokenJSON);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getAuthToken =  (type: TokenType) => {
    let tokentmp: Promise<string>;
    try {
      if (type === 'accessToken') {
        tokentmp =  AsyncStorage.getItem('accessToken');
      } else if (type === 'refreshToken') {
        tokentmp =  AsyncStorage.getItem('refreshToken');
      }
    } catch (e) {
      console.error(e);
    }
    //console.log(token)
    tokentmp.then(data => setToken(JSON.parse(data).token))
    return token;
  };

  const removeAuthToken = async () => {
      await AsyncStorage.removeItem('accesToken');
      await AsyncStorage.removeItem('refreshToken');
  };

  return [setAuthToken, getAuthToken, removeAuthToken];
};
