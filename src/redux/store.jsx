import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import booksReducer from "./books-reducer";

let reducers = combineReducers({
  booksPage: booksReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;