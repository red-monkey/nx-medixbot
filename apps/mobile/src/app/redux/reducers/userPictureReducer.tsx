import {Asset} from 'react-native-image-picker';
import {SetPictureAction} from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: {selected: Asset | null} = {
  selected: null,
};

function userPictureReducer(state = initialState, action: SetPictureAction) {
  const {payload} = action;
  switch (action.type) {
    case actionTypes.SET_USER_PICTURE:
      return {...state,selected : payload };
    default:
      return state;
  }
}

export default userPictureReducer;