let initialtState = {
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
};

function booksReducer(state = initialtState, action) {
  switch (action.type) {
    case 1:
      return { ...state, totalUsersCount: 2000 }
    default:
      return state;
  }
}

export default booksReducer;