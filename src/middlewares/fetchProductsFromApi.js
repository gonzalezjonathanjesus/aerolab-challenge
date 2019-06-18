import {
    FETCH_PRODUCTS
} from '../constants/actionTypes';
import { fetchingProducts, fetchSuccess, fetchFailure } from '../actions/fetchProducts';

export const fetchProductsFromApi = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if(action.type === FETCH_PRODUCTS) {
                dispatch(fetchingProducts());

                return fetch('https://challenge-api.aerolab.co/products')
                        .then((response) => {
                            const body = response.json();
                            body.then(response => {
                                console.log(response);
                                dispatch(fetchSuccess(response.products));
                            })
                            .catch(err => {
                                dispatch(fetchFailure(err.toString()));
                            });
                        })
                        .catch(err => {
                            dispatch(fetchFailure(err.toString()));
                        });
            }

            return next(action);
        }
    }
}