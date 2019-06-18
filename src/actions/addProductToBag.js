import ADD_PRODUCT_TO_BAG from '../constants/actionTypes';

export const addProductToBag = payload => {
    return {
        type: ADD_PRODUCT_TO_BAG,
        payload
    }
}