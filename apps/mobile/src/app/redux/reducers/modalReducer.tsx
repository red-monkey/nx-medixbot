import {SetLanguageModaldAction, SetModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};


const languageInitialState: {isOpen: boolean,selectedLanguages: Array<string>} = {
  isOpen: false,
  selectedLanguages: []
};

export function modalReducer(state = initialState, action: SetModaldAction) {
  switch (action.type) {
    case actionTypes.OPEN_PICTURE_PICKER_MODAL:
      return {...state,isOpen : true };
    case actionTypes.CLOSE_PICTURE_PICKER_MODAL:
      return {...state,isOpen : false };
    default:
      return state;
  }
}

export function languageModalReducer(state = languageInitialState, action: SetLanguageModaldAction) {
  const {payload} = action
  switch (action.type) {
    case actionTypes.OPEN_LANGUAGE_MODAL:
      return {...state,isOpen : true };
    case actionTypes.CLOSE_LANGUAGE_MODAL:
      return {...state,isOpen : false };
    case actionTypes.ADD_OR_REMOVE_LANGUAGE:
      /*if(checkIfSelected(action.payload,state.selectedLanguages) === true)removeFromList(action.payload,state.selectedLanguages)
      else {if(typeof(action.payload)==='string')state.selectedLanguages.push(action.payload)}*/
      return {...state,selectedLanguages: payload};
    default:
      return state;
  }
}



