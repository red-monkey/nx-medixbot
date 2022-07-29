import * as actionTypes from '../actions/actionTypes';
import { FoodAction } from '../../utils/types';
import { FoodRecognitionData } from '../../screens/MetabolicHealth/components/AddFood';



const initialState:{foods: FoodRecognitionData[]} = {
    foods : []
};

export const foodReducer = (
  state = initialState,
  action: FoodAction
) => {
  switch (action.type) {
    case actionTypes.ADD_FOOD:
      return  [...state.foods, action.payload] ;
    default:
      return state;
  }
};
