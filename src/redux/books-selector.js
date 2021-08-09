export const getBooksState = (state) => {
  return state.booksPage.books;
}

export const getPageSize = (state) => {
  return state.booksPage.pageSize;
}

export const getTotalBooksCount = (state) => {
  return state.booksPage.totalBooks;
}

export const getCurrentPage = (state) => {
  return state.booksPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.booksPage.isFetching;
}

export const getFormData = (state) => {
  return state.booksPage.formData;
}