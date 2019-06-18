import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
import { fetchProductsFromApi } from './../middlewares/fetchProductsFromApi';
import thunk from 'redux-thunk';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(fetchProductsFromApi, thunk));

export default store;