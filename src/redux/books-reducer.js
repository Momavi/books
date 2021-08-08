import { booksAPI } from "../components/api/api";

const SET_BOOKS = 'SET_BOOKS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT'

let initialtState = {
  books: [],
  pageSize: 30,
  totalBooks: 0,
  currentPage: 1,
  isFetching: true,
};

function booksReducer(state = initialtState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.books }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case SET_TOTAL_BOOKS_COUNT: {
      return { ...state, totalBooks: action.totalBooks }
    }
    default:
      return state;
  }
}

export const setBooks = (books) => ({ type: SET_BOOKS, books })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalBooksCount = (totalBooks) => ({ type: SET_TOTAL_BOOKS_COUNT, totalBooks })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getBooks = (currentPage, sortText, maxResults) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let currentStartIndex = currentPage * maxResults
    let data = await booksAPI.getBooks(sortText, currentStartIndex, maxResults)
    dispatch(toggleIsFetching(false));
    dispatch(setBooks(data.data.items));
    dispatch(setTotalBooksCount(data.data.totalItems));
  }
}

export default booksReducer;