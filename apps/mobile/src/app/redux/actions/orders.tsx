import { TOrder, TStatus } from '../../utils/types';
import * as actionTypes from './actionTypes';

export const addOrder = (order: TOrder) => {
    return{
        type: actionTypes.ADD_ORDER,
        payload: order,
    }
}

export const changeOrderStatus = (orderId: string, newStatus: TStatus) => {
    return{
        type: actionTypes.CHANGE_ORDER_STATUS,
        payload: {orderId: orderId, newStatus: newStatus},
    }
}