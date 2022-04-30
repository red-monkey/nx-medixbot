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

export const setLocationModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_LOCATION_MODAL
        : actionTypes.CLOSE_LOCATION_MODAL,
    payload: isOpen,
  };
};

export const setLanguageModal = (isOpen: boolean) => {
  return {
    type:
      isOpen === true
        ? actionTypes.OPEN_LANGUAGE_MODAL
        : actionTypes.CLOSE_LANGUAGE_MODAL,
    payload: isOpen,
  };
};

export const setSelectedLanguages = (language: string) => {
  return {
    type: actionTypes.ADD_OR_REMOVE_LANGUAGE,
    payload: language
  }
}

export const setUserPicture = (base64: Asset | null) => {
  return {
    type: actionTypes.SET_USER_PICTURE,
    payload: base64,
  };
};
