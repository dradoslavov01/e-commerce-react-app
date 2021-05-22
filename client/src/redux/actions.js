import * as actionTypes from './types';

export const setProducts = (payload) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: payload
    }
}

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    };
};

export const addToFavorite = (itemId) => {
    return {
        type: actionTypes.ADD_TO_FAVORITE,
        payload: {
            id: itemId
        }
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    };
};

export const removeFromFavorite = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITE,
        payload: {
            id: itemId
        }
    };
};

export const removeAllItems = () => {
    return {
        type: actionTypes.REMOVE_ALL_ITEMS,
    };
}

export const adjustQty = (itemId, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        palyload: item
    };
};