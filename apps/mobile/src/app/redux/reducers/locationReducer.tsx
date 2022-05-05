import { location, SetLocationAction } from "../../utils/types"
import * as actionTypes from '../actions/actionTypes';

const initialState: location = {
    country: '',
    city: '',
    state: '',
    postCode: '',
    addressLine1: '',
    addressLine2: '',
}

export function locationReducer(state= initialState, action: SetLocationAction){
    const {payload} = action;
    switch (action.type) {
      case actionTypes.SET_LOCATION:
        return {...state, country: payload.country, city: payload.city, state: payload.state, postCode: payload.postCode, addressLine1: payload.addressLine1, addressLine2: payload.addressLine2};
      default:
        return state;
    }
}