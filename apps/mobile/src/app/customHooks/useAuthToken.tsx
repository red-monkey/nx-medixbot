import {IToken, TokenType} from '../apollo/GraphQL/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAccessToken = (): [
  (token: IToken, type: TokenType) => Promise<void>,
  (type: TokenType) => Promise<string | null | undefined>,
  () => void,
] => {
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

  const getAuthToken = async (type: TokenType) => {
    let token;
    try {
      if (type === 'accessToken') {
        token = await AsyncStorage.getItem('accessToken');
      } else if (type === 'refreshToken') {
        token = await AsyncStorage.getItem('refreshToken');
      }
    } catch (e) {
      console.error(e);
    }
    return token;
  };

  const removeAuthToken = async () => {
      await AsyncStorage.removeItem('accesToken');
      await AsyncStorage.removeItem('refreshToken');
  };

  return [setAuthToken, getAuthToken, removeAuthToken];
};
