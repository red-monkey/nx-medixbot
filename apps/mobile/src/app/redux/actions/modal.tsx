import { EMembership } from '@medixbot/types';
import {Asset} from 'react-native-image-picker';
import { languageModalReducer } from '../reducers/modalReducer';
import * as actionTypes from './actionTypes';

export const setPictureModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_PICTURE_PICKER_MODAL
        : actionTypes.CLOSE_PICTURE_PICKER_MODAL,
    payload: isOpen,
  };
};

export const setMembershipModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_MEMBERSHIP_MODAL
        : actionTypes.CLOSE_MEMBERSHIP_MODAL,
    payload: isOpen,
  };
};

export const setMembership = (membership: EMembership) => {
  return {
    type: actionTypes.SET_MEMBERSHIP,
    payload: membership
  }
}

export const setLanguageModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_LANGUAGE_MODAL
        : actionTypes.CLOSE_LANGUAGE_MODAL,
    payload: isOpen,
  };
};

export const setDateModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_DATE_PICKER_MODAL
        : actionTypes.CLOSE_DATE_PICKER_MODAL,
    payload: isOpen,
  };
};

export const setDate = (date: string) => {
  return {
    type: actionTypes.SET_BIRTH_DATE,
    payload: date,
  }
}

export const setSelectedLanguages = (languages: string[]) => {
  return {
    type: actionTypes.ADD_OR_REMOVE_LANGUAGE,
    payload: languages
  }
}

