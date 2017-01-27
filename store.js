import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './src/reducers';

const middleware = applyMiddleware(thunk);
export default createStore(combinedReducers, middleware);
