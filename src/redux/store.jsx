import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import booksReducer from "./books-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
  booksPage: booksReducer,
  searchPage: searchReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;