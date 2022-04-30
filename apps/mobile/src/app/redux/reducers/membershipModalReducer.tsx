import {SetMembershipModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};

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
