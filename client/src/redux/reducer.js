import * as actionTypes from './types';



const INITIAL_STATE = {
   user: {},
   isLoggedIn: false,
   products: [],
   favoriteItems: [],
   cart: [],
   currentItem: null,
};


const reducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case actionTypes.SET_USER:
         return {
            ...state,
            user: action.payload,
            isLoggedIn: true,
         };
      case actionTypes.SET_PRODUCTS:
         return {
            ...state,
            products: action.payload,
         };
      case actionTypes.ADD_TO_CART:

         const product = state.products.find(item => item.id === action.payload.id);
         const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);

         return {
            ...state,
            cart: inCart
               ? state.cart.map((item) => item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
               )
               : [...state.cart, { ...product, qty: 1 }],
         };
      case actionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
         };
      case actionTypes.ADD_TO_FAVORITE:

         const item = state.products.find(item => item.id === action.payload.id);
         const inFavorite = state.favoriteItems.find(item => item.id === action.payload.id ? true : false);

         return {
            ...state,
            favoriteItems: inFavorite
               ? state.favoriteItems.map((item) => item.id === action.payload.id
                  ? { ...item }
                  : item
               )
               : [...state.favoriteItems, { ...item }],
         };
      case actionTypes.REMOVE_FROM_FAVORITE:
         return {
            ...state,
            favoriteItems: state.favoriteItems.filter(item => item.id !== action.payload.id)
         };
      case actionTypes.ADJUST_QTY:
         return {
            ...state,
            cart: state.cart.map(item => item.id === action.payload.id
               ? { ...item, qty: action.payload.qty }
               : item
            ),
         };
      case actionTypes.REMOVE_ALL_ITEMS:
         return {
            ...state,
            cart: [],
         };
      case actionTypes.LOAD_CURRENT_ITEM:
         return {
            ...state,
            currentItem: action.payload
         };
      default:
         return state;
   };
};


export default reducer;