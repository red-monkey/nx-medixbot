import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginMethod} from '../utils/types';
import {IToken, TokenType} from '../apollo/GraphQL/types';

export const setAuthToken = async (token: IToken, type: TokenType) => {
  const tokenJSON = JSON.stringify(token);
  try {
    if (type === 'accessToken') {
      await AsyncStorage.setItem('accessToken', tokenJSON);
    } else if (type === 'refreshToken') {
      await AsyncStorage.setItem('refreshToken', tokenJSON);
    }
  } catch (e) {console.error(e)}
};

export const storeItem = async (value: string, type: loginMethod) => {
  try {
    if (type === 'email') {
      await AsyncStorage.setItem('email-address', value);
    } else if (type === 'phone') {
      await AsyncStorage.setItem('phone-number', value);
    }
  } catch (e) {console.error(e)}
};

export const getItem = async (type: loginMethod) => {
  try {
    const itemName = type === 'phone' ? 'phone-number' : 'email-address';
    const jsonValue = await AsyncStorage.getItem(itemName);
    return jsonValue != null ? jsonValue.toString() : null;
  } catch (e) {console.error(e)}
};
