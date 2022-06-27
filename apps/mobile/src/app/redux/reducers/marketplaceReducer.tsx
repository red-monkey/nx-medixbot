import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    products:[],
    cart:[],
};

const marketplaceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return{}
        case actionTypes.REMOVE_FROM_CART:
            return{}
        case actionTypes.ADJUST_QTY:
            return{}
        case actionTypes.VIEW_PRODUCT:
            return{}
    }
}

export default marketplaceReducer;