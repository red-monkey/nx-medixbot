import {loginMethod} from '../../utils/types';
import * as actionTypes from './actionTypes';

export const setLoginMethod = (method: loginMethod) => {
  return {
    type:
      method === 'phone'
        ? actionTypes.SET_LOGIN_METHOD_PHONE_NUMBER
        : method === 'email'
        ? actionTypes.SET_LOGIN_METHOD_EMAIL
        : null,
    payload: method,
  };
};


export const setIsLoggedIn = (isLoggedIn: boolean) => {
  return {
    type: actionTypes.SET_USER_IS_LOGGED_IN,
    payload: isLoggedIn,
  }
}
