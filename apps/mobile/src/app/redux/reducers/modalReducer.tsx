import {SetModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};

function modalReducer(state = initialState, action: SetModaldAction) {
  switch (action.type) {
    case actionTypes.OPEN_PICTURE_PICKER_MODAL:
      let newState = {...state};
      newState.isOpen = true;
      return newState;
    case actionTypes.CLOSE_PICTURE_PICKER_MODAL:
      newState = {...state};
      newState.isOpen = false;
      return newState;
    default:
      return state;
  }
}

export default modalReducer;
