import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middleware=[ReduxThunk]; 
export const createStoreMiddleware=applyMiddleware(...middleware)(createStore)
export const store=createStoreMiddleware(rootReducer);