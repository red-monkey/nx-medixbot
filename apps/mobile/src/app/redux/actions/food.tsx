import { FoodRecognitionData } from '../../screens/MetabolicHealth/components/AddFood';
import * as actionTypes from './actionTypes';

export const addFood = (data: FoodRecognitionData) => {
    return {
        type: actionTypes.ADD_FOOD,
        payload: data
    }
}