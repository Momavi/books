import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import booksReducer from './books-reducer';
import popupReducer from './popup-reducer';

let reducers = combineReducers({
  booksPage: booksReducer,
  popupPage: popupReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;