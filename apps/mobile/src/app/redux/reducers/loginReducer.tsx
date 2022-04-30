import {LoginActionTypes, loginMethod, SetIsloggedIn} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const methods: {num: loginMethod; email: loginMethod} = {
  num: 'phone',
  email: 'email',
};

const loggedIn : {isLoggedIn: boolean} = {
  isLoggedIn: false
}

const initialState: {communicationMethod: loginMethod} = {
  communicationMethod: methods.num,
};

export function loginMethodReducer(state = initialState, action: LoginActionTypes) {
  const {payload} = action;
  switch (action.type) {
    case actionTypes.SET_LOGIN_METHOD_PHONE_NUMBER:
      return {...state, communicationMethod: payload};
    case actionTypes.SET_LOGIN_METHOD_EMAIL:
      return {...state, communicationMethod: payload};
    default:
      return state;
  }
}

export function loginReducer(state = loggedIn, action: SetIsloggedIn) {
  const {payload} = action;
  switch (action.type) {
    case actionTypes.SET_USER_IS_LOGGED_IN:
      return {...state, isLoggedIn: payload};
    default:
      return state;
  }
}

