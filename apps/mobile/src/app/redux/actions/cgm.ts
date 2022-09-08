import * as actionTypes from './actionTypes';

export interface ICGM {
  id: string;
  activity: string;
  location: string;
  value: number;
  date: Date;
}

export const updateCGM = (data: ICGM[]) => {
  return {
    type: actionTypes.UPDATE_CGM,
    payload: data,
  };
};
