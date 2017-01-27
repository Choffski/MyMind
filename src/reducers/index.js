import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import newsReducer from './newsReducer';

const combined = combineReducers({
  category: categoryReducer,
  news: newsReducer
})
export default combined;
