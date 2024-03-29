import { TProduct } from '@medixbot/types';
import { IItemProp, items, TCartItem } from '../../screens/Marketplace';
import { marketplaceActions } from '../../utils/types';
import * as actionTypes from '../actions/actionTypes'

type state = {
    products: TProduct[],
    cart: TCartItem[],
    currentItem: IItemProp,
    total: number,
    shippingAddress: string
}
const INITIAL_STATE: state  = {
    products: [],
    cart:[],
    currentItem: null,
    total: 0,
    shippingAddress: ''
};

const marketplaceReducer = (state:state = INITIAL_STATE, action: marketplaceActions) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case actionTypes.ADD_TO_CART:{
            //get products data
            const item = state.products.find((prod) => prod.id === action.payload.id);
            //check if item is in cart
            const inCart = state.cart.find((item) =>
                item.product?.id === action.payload.id ? true : false);
            return{
                ...state,
                cart: inCart
                    ?   state.cart.map((item) => 
                            item.product.id === action.payload.id
                                ? {...item, qty: item.qty + 1}
                                : item
                        )
                    :   [...state.cart, {product: item, qty: 1}],
                total: state.total + item.price
            };
        };
        case actionTypes.ADD_TO_CART_WITH_COUNT: {
            const item = state.products.find((prod) => prod.id === action.payload.id);
            //check if item is in cart
            const inCart = state.cart.find((item) =>
                item.product.id === action.payload.id ) ? true : false;
            return{
                ...state,
                cart: inCart
                ?   state.cart.map((item) => 
                        item.product.id === action.payload.id
                            ? {...item, qty: item.qty + action.payload.count}
                            : item
                    )
                :   [...state.cart, {product: item, qty: action.payload.count}],
                total: state.total + item.price * action.payload.count
            }
        };
        case actionTypes.REMOVE_FROM_CART:{
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) =>
            item.product.id === action.payload.id ? true : false);
            console.log(inCart)
            return{
                ...state,
                cart: state.cart.filter((item) => item.product.id !== action.payload.id),
                total: inCart ? (state.total - item.price) : state.total
            };
        };
        case actionTypes.DECREASE_QTY:{
            const item = state.products.find((prod) => prod.id === action.payload.id);
            //check if item is in cart
            const inCart = state.cart.find((item) =>
                item.product.id === action.payload.id ? true : false);
            return{
                ...state,
                cart: inCart
                ?   state.cart.map((item) => 
                        item.product.id === action.payload.id
                            ? {...item, qty: item.qty - 1}
                            : item
                    )
                :state.cart.filter((item) => item.product.id !== action.payload.id),
                total: state.total - item.price 
            }
        };
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cart: [],
                total: 0
            };
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.product.id === action.payload.id ? { ...item, qty: action.payload.qty} : item),
            };
        case actionTypes.VIEW_PRODUCT:
            return{
                ...state,
                currentItem: action.payload,
            }
        ;
        case actionTypes.SET_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress: action.payload
            };
        case actionTypes.RESET_SHIPPING_ADDRESS:
                return{
                    ...state,
                    shippingAddress: INITIAL_STATE.shippingAddress
                };
        default:
            return state;
    };
};

export default marketplaceReducer;