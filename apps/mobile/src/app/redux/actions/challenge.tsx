import * as actionTypes from './actionTypes';

export const updateMood = (mood: string) => {
  return {
    type: actionTypes.SET_USER_MOOD,
    payload: mood,
  };
};
