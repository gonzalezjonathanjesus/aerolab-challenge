import { FETCH_PRODUCTS, FETCHING_PRODUCTS, FETCH_SUCCESS, FETCH_FAILURE } from './../constants/actionTypes';

/*const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchingProducts());
        fetch('https://challenge-api.aerolab.co/products')
        .then((response) => response.json())
        .then((products) => dispatch(fetchSuccess(products)))
        .catch(() => dispatch(fetchFailure(error)));
    }
};*/

const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
});

const fetchingProducts = () => ({
    type: FETCHING_PRODUCTS
});

const fetchSuccess = payload => ({
    type: FETCH_SUCCESS,
    payload
});

const fetchFailure = payload => ({
    type: FETCH_FAILURE,
    payload
});

export {
    fetchProducts,
    fetchingProducts,
    fetchSuccess,
    fetchFailure
};