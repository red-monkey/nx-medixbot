import { TAppointment, TDoctor, THealthcare, TNatureOfHealth } from '../../utils/types';
import * as actionTypes from './actionTypes';

export const setHealthcareType = (healthcare: THealthcare) => {
  return {
    type: actionTypes.SET_HEALTHCARE_TYPE,
    payload: healthcare,
  };
};

export const setNatureOfHealth = (natureOfHealth: TNatureOfHealth) => {
    return {
        type: actionTypes.SET_NATURE_OF_HEALTH,
        payload: natureOfHealth
    }
}

export const setDoctor = (doctor: TDoctor) => {
    return {
        type: actionTypes.SET_DOCTOR,
        payload: doctor
    }
}

export const addAppointment = (date: string, time: string) => {
    return {
        type: actionTypes.ADD_APPOINTMENT,
        payload: {date: date, time: time}
    }
}

export const resetCurrentAppointment = () => {
    return {
        type: actionTypes.RESET_APPOINTMENT,
    }
}
