import * as actionTypes from '../actions/actionTypes';
import { ICGM } from '../actions/cgm';

const initialState = [] as ICGM[];

export const cgmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CGM:
      return payload;

    default:
      return state;
  }
};
