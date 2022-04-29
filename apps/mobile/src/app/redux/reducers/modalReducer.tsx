import {SetLanguageModaldAction, SetLocationModaldAction, SetModaldAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {isOpen: boolean} = {
  isOpen: false,
};

const locationInitialState: {isOpen: boolean} = {
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

export function locationModalReducer(state = locationInitialState, action: SetLocationModaldAction) {
  switch (action.type) {
    case actionTypes.OPEN_LOCATION_MODAL:
      return {...state,isOpen : true };
    case actionTypes.CLOSE_LOCATION_MODAL:
      return {...state,isOpen : false };
    default:
      return state;
  }
}

export function languageModalReducer(state = languageInitialState, action: SetLanguageModaldAction) {
  switch (action.type) {
    case actionTypes.OPEN_LANGUAGE_MODAL:
      return {...state,isOpen : true };
    case actionTypes.CLOSE_LANGUAGE_MODAL:
      return {...state,isOpen : false };
    case actionTypes.ADD_OR_REMOVE_LANGUAGE:
      if(checkIfSelected(action.payload,state.selectedLanguages) === true)removeFromList(action.payload,state.selectedLanguages)
      else {if(typeof(action.payload)==='string')state.selectedLanguages.push(action.payload)}
      return state;
    default:
      return state;
  }
}

const checkIfSelected = (lang: string | boolean,languageArray: Array<string>) => {
  let inserted = false;
  languageArray.forEach((item,i) => {
    if(item === lang)inserted =true;
  });  
  return inserted;     
}

const removeFromList = (lang: string | boolean,languageArray: Array<string>) => {
  languageArray.forEach((item,i) => {
    if(item === lang)languageArray.splice(i,1);
  });    
}

