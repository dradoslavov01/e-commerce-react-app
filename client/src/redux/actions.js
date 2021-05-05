import * as actionTypes from './types';


export const addToCart = (itemId) => {
    return {
        type: actionTypes.AD_TO_CART,
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

export const loadCurrentIte = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        palyload: item
    };
};