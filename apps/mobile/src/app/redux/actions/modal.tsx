import {Asset} from 'react-native-image-picker';
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

export const setUserPicture = (base64: Asset | null) => {
  return {
    type: actionTypes.SET_USER_PICTURE,
    payload: base64,
  };
};
