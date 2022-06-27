import * as actionTypes from './actionTypes';

export const addToCart = (itemId: number) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
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

export const adjustQty = (itemID: number, value: number) => {
    return{
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        },
    }
}

export const viewProduct = (item) =>{
    return{
        type: actionTypes.VIEW_PRODUCT,
        payload: item,
    }
}