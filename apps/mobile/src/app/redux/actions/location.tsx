import { location } from "../../utils/types";
import * as actionTypes from './actionTypes';

export const setLocation = (data: location) => {
    return {
        type: actionTypes.SET_LOCATION,
        payload: data
    }
}