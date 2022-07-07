import { IItemProp, items, TCartItem } from '../../screens/Marketplace';
import * as actionTypes from '../actions/actionTypes'

type state = {
    products: IItemProp[],
    cart: TCartItem[],
    currentItem: IItemProp,
    total: number
}
const INITIAL_STATE: state  = {
    products: items,
    cart:[],
    currentItem: null,
    total: 0
};

const marketplaceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:{
            //get products data
            const item = state.products.find((prod) => prod.id === action.payload.id);
            //check if item is in cart
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false);
            return{
                ...state,
                cart: inCart
                    ?   state.cart.map((item) => 
                            item.id === action.payload.id
                                ? {...item, qty: item.qty + 1}
                                : item
                        )
                    :   [...state.cart, {...item, qty: 1}],
                total: state.total + item.price
            };
        };
        case actionTypes.REMOVE_FROM_CART:{
            const item = state.products.find((prod) => prod.id === action.payload.id);
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                total: (state.total - item.price)
            };
        };
        case actionTypes.ADJUST_QTY:{
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty} : item),
            };
        };
        case actionTypes.VIEW_PRODUCT:{
            return{
                ...state,
                currentItem: action.payload,
            }
        }
        default:
            return state;
    };
};

export default marketplaceReducer;