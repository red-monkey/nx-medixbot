import { TOrder } from '@medixbot/types';
import {  TStatus } from '../../utils/types';
import * as actionTypes from './actionTypes';

export const addOrder = (order: TOrder) => {
    return{
        type: actionTypes.ADD_ORDER,
        payload: order,
    }
}

export const setOrderTodelivered = (orderId: string) => {
    return{
        type: actionTypes.CHANGE_ORDER_STATUS,
        payload: {orderId: orderId},
    }
}

export const setOrders = (orders: TOrder[],userId: string) => {
    return {
        type: actionTypes.SET_ORDERS,
        payload: {orders: orders, userId: userId}
    }
}