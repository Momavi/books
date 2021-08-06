let initialtState = {
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
  ]
};

function searchReducer(state = initialtState, action) {
  switch (action.type) {
    case 'many':
      return { ...state, totalUsersCount: 2000 }
    default:
      return state;
  }
}

export default searchReducer;