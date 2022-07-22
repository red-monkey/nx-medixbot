import { EAppointmentStatus } from '@medixbot/types';
import { AppointmentAction, TAppointment, TDoctor, THealthcare, TNatureOfHealth } from '../../utils/types';
import * as actionTypes from '../actions/actionTypes';

interface IState {
    currentAppointment: TAppointment
    appointments: TAppointment[]
}

const initialState: IState = {
    currentAppointment: {
        Healthcare: null,
        NatureOfHealth: null,
        doctor: null,
        date: '',
        time: '',
        status: EAppointmentStatus.Pending
    },
    appointments: []
}

export const appointmentReducer = (
    state: IState = initialState,
    action: AppointmentAction
  ) => {
    switch (action.type) {        
        case actionTypes.SET_HEALTHCARE_TYPE:
          return { 
            ...state, 
            currentAppointment: {...state.currentAppointment,Healthcare: action.payload}};
        case actionTypes.SET_NATURE_OF_HEALTH:
          return { 
            ...state,  
            currentAppointment: {...state.currentAppointment,NatureOfHealth: action.payload}};    
        case actionTypes.SET_DOCTOR:
          return { 
            ...state, 
            currentAppointment: {...state.currentAppointment,doctor: action.payload}};   
        case actionTypes.ADD_APPOINTMENT:
            return { ...state, appointments: [...state.appointments,{...state.currentAppointment,date: action.payload.date, time: action.payload.time }] };
        case actionTypes.RESET_APPOINTMENT:
              return { ...state, currentAppointment: initialState.currentAppointment};
        default:
          return state;
      }
  }