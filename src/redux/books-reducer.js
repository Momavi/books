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
  isFetching: false,
  categori: [
    { id: 1, name: 'All' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Biography' },
    { id: 4, name: 'Computers' },
    { id: 5, name: 'History' },
    { id: 6, name: 'Medical' },
    { id: 7, name: 'Poetry' },
  ],
  sort: [
    { id: 1, name: 'Relevance' },
    { id: 2, name: 'Newest' },
  ],
  formData: {
    text: '',
    categori: 'all',
    sort: 'relevance',
  }
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

export const getBooks = (values, currentPage = 1, maxResults = 30) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let currentStartIndex = (currentPage * maxResults) - maxResults
    let data = await booksAPI.getBooks(values, currentStartIndex, maxResults)

    dispatch(setTotalBooksCount(data.data.totalItems));
    dispatch(setBooks(data.data.items));
    dispatch(toggleIsFetching(false));
  }
}


export default booksReducer;