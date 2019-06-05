import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

// use applyMiddleware to add the thunk middleware to the store
export const store = createStore(rootReducer, applyMiddleware(thunk));