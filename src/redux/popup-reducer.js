const SET_POPUP_DATA = 'SET_POPUP_DATA'
const TOOGLE_POPUP_OPEN = 'TOOGLE_POPUP_OPEN'

let initialtState = {
  popupData: {},
  isPopupOpen: false,
};

function popupReducer(state = initialtState, action) {
  switch (action.type) {
    case SET_POPUP_DATA:
      return { ...state, popupData: action.popupData }
    case TOOGLE_POPUP_OPEN:
      return { ...state, isPopupOpen: action.isPopupOpen }
    default:
      return state;
  }
}

export const setPopupData = (popupData) => ({ type: SET_POPUP_DATA, popupData })
export const setIsPopupOpen = (isPopupOpen) => ({ type: TOOGLE_POPUP_OPEN, isPopupOpen })


export const togglePopupOpen = (book, isPopupOpen) => {
  return async (dispatch) => {
    dispatch(setPopupData(book));
    dispatch(setIsPopupOpen(isPopupOpen));
  }
}

export default popupReducer;