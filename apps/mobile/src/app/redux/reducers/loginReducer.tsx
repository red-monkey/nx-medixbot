import {LoginActionTypes, loginMethod} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const methods: {num: loginMethod; email: loginMethod} = {
  num: 'phone',
  email: 'email',
};

const initialState: {communicationMethod: loginMethod} = {
  communicationMethod: methods.num,
};

function loginMethodReducer(state = initialState, action: LoginActionTypes) {
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

export default loginMethodReducer;
