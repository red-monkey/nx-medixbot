import { EMembership } from '@medixbot/types';
import {SetMembershipAction, SetMembershipModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};

const initialMembershipState: {membership: null | EMembership} = {
  membership: null
}

export default function membershipModalReducer(
  state = initialState,
  action: SetMembershipModaldAction,
) {
  switch (action.type) {
    case actionTypes.OPEN_MEMBERSHIP_MODAL:
      return {...state,isOpen : true };
    case actionTypes.CLOSE_MEMBERSHIP_MODAL:
      return {...state,isOpen : false };
    default:
      return state;
  }
}

export function membershipReducer(
  state = initialMembershipState,
  action: SetMembershipAction
) {
  switch (action.type) {
    case actionTypes.SET_MEMBERSHIP:
      return {...state,membership: action.payload };
    default:
      return state;
  }
}