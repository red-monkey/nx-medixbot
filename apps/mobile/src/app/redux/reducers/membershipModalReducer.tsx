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
      let newState = {...state};
      newState.isOpen = true;
      return newState;
    case actionTypes.CLOSE_MEMBERSHIP_MODAL:
      newState = {...state};
      newState.isOpen = false;
      return newState;
    default:
      return state;
  }
}
