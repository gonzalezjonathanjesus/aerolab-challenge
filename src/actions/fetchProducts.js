import { FETCH_PRODUCTS, FETCHING_PRODUCTS, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchingProducts());
        fetch('https://challenge-api.aerolab.co/products')
        .then((response) => response.json())
        .then((products) => dispatch(fetchSuccess(products)))
        .catch(() => dispatch(fetchFailure(error)));
    }
};

const fetchingProducts = () => ({ 
    type: FETCHING_PRODUCTS,
    payload: {
        isLoading: true
    }
});

const fetchSucess = productList => ({
    type: FETCH_SUCCESS,
    payload: {
        productList
    }
});

const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: {
        error
    }
});