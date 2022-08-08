import { TOrder } from '@medixbot/types';
import { orderAction } from '../../utils/types';
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
        case actionTypes.SET_ORDERS: {
            const orders = action.payload.orders.filter(item => item.user.id === action.payload.userId)
            return {
                ...state,
                orders: orders
            }            
        }

        case actionTypes.ADD_ORDER: 
            return{
                ...state,
                orders: [...state.orders, action.payload]           
            };
        case actionTypes.CHANGE_ORDER_STATUS: {
             state.orders.map(item => console.log(item))
            return{
                ...state,
                orders: state.orders.map(item => item.id === action.payload.orderId ? { ...item, isDelivered: true, deliveredAt: new Date()} : item),
            };}
        default:
            return state;  
    };      
  };

