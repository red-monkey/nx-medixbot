import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    products:[
        {
            "id": 1,
            "category": "Medical Kits",
            "productName": "watchit Smartly",
            "price": 200,
            "rating": 4.5,
            "url": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            "description": "Get control of your vitals with our smart Watchit device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health."

        },
        {
            "id": 2,
            "category": "Test Kits",
            "productName": "Pulse Oxymeter",
            "price": 300,
            "rating": 4.5,
            "url": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            "description": "Get control of your vitals with our smart Pulse Oxymeter device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health."

        },
        {
            "id": 3,
            "category": "Test Kits",
            "productName": "Blood Glucose Monitor",
            "price": 800,
            "rating": 4.3,
            "url": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            "description": "Get control of your vitals with our smart Blood GLucose Monitor device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health."

        },
        {
            "id": 4,
            "category": "Test Kits",
            "productName": "Contunuous Glucose Monitor",
            "price": 400,
            "rating": 4.3,
            "url": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            "description": "Get control of your vitals with our smart Continuous Glucose device. You can now also be able to connect our CGM device to Watchit as you manage your diabetes on the go. Get display of your health vitals and recommendations on how to improve your health."

        }
    ],
    cart:[],
    currentItem: null,
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
                    :   [...state.cart, {...item, qty: 1}]
            };
        };
        case actionTypes.REMOVE_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
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