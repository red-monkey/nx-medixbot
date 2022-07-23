import { TCartItem } from '../../screens/Marketplace';
import * as actionTypes from './actionTypes';

export const addToCart = (itemId: number) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        },
    }
}

export const addToCartWithCounter = (itemId: number, count: number) => {
    return{
        type: actionTypes.ADD_TO_CART_WITH_COUNT,
        payload: {
            id: itemId,
            count: count
        },
    }
}

export const removeFromCart = (itemID: number ) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    }
}

export const decreaseQty = (itemID: number) => {
    return{
        type: actionTypes.DECREASE_QTY,
        payload: {
            id: itemID
        },
    }
}

export const adjustQty = (itemID: number, value: number) => {
    return{
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        },
    }
}

export const clearCart = () => {
    return{
        type: actionTypes.CLEAR_CART,
        payload: {}
    }
}

export const viewProduct = (item) =>{
    return{
        type: actionTypes.VIEW_PRODUCT,
        payload: item,
    }
}

export const isInCart = (cart: TCartItem[],id: number) => {
    const inCart = cart.find((item) =>
                item.id === id ? true : false);
    return inCart
}


export const setShippingAddress = (address: string) => {
    //console.log(address)
    return{
        type: actionTypes.SET_SHIPPING_ADDRESS,
        payload: address,
    }
}

export const resetShippingAddress = () => {
    //console.log(address)
    return{
        type: actionTypes.RESET_SHIPPING_ADDRESS,
    }
}