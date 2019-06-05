import { 
    FETCH_PRODUCTS,
    FETCHING_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_ERROR,
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG 
} from '../actions/actionTypes';

const initialState = {
    header: {
        bag: {
            productList: [],
            cant: 0,
            totalPrice: 0,
        }
    },
    catalog: {
        productList: [],
        page: 1,
        page_count: 1,
        error: null
    }
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_PRODUCTS:
            return {
                ...state,
                catalog: {
                    isLoading: true
                }
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                catalog: {
                    ...state.catalog,
                    isLoading: false,
                    productList: [...state.catalog.productList, action.payload]
                }
            };
        case FETCH_ERROR:
            return {
                ...state,
                catalog: {
                    ...state.catalog,
                    isLoading: false,
                    error: action.payload.error
                }
            };
        default:
            return state;
    }
}
