import {SetDateModalAction, SetLanguageModaldAction, SetModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};


const languageInitialState: {isOpen: boolean,selectedLanguages: Array<string>} = {
  isOpen: false,
  selectedLanguages: []
};

const dateInitialState: {isOpen: boolean, date: string} = {
  isOpen: false,
  date: ""
}

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
      return {...state,selectedLanguages: payload};
    default:
      return state;
  }
}

export function DatePickerModalReducer(state = dateInitialState, action: SetDateModalAction ) {
  const {payload} = action
  switch (action.type) {
    case actionTypes.OPEN_DATE_PICKER_MODAL:
      return{...state,isOpen : true};
    case actionTypes.CLOSE_DATE_PICKER_MODAL:
      return{...state,isOpen: false}
    case actionTypes.SET_BIRTH_DATE:
      return{...state,date: payload}
    default:
      return state;
  }
}



