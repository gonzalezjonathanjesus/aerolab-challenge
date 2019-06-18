import { 
    FETCHING_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG 
} from '../constants/actionTypes';

const initialState = {
    header: {
        bag: {
            productList: [],
            cant: 0,
            totalPrice: 0,
        }
    },
    catalog: {
        isLoading: false,
        productList: [],
        page: 1,
        page_count: 1,
        error: false
    }
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_PRODUCTS:
            return {
                ...state,
                catalog: {
                    ...state.catalog,
                    isLoading: true
                }
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                catalog: {
                    ...state.catalog,
                    isLoading: false,
                    productList: action.payload,
                    error: false
                }
            };
        case FETCH_FAILURE:
            return {
                ...state,
                catalog: {
                    ...state.catalog,
                    isLoading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
}
