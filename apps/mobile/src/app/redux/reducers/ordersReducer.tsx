import { orderAction, TOrder } from '../../utils/types';
import * as actionTypes from '../actions/actionTypes'

type IState = {
    orders: TOrder[],
}
const INITIAL_STATE: IState  = {
    orders: []
};

export const orderReducer = (
    state: IState = INITIAL_STATE,
    action: orderAction
  ) => {
    switch(action.type){
        case actionTypes.ADD_ORDER: 
            return{
                ...state,
                orders: [...state.orders, action.payload]           
            };
        case actionTypes.CHANGE_ORDER_STATUS: 
            return{
                ...state,
                orders: state.orders.map(item => item.orderId === action.payload.orderId ? { ...item, status: action.payload.newStatus} : item),
            };
        default:
            return state;  
    };      
  };

