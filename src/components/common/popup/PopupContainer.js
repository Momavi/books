import Popup from './Popup';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setPopupData, togglePopupOpen } from './../../../redux/popup-reducer'

let mapStateToProps = (state) => {
  return {
    popupPage: state.popupPage,
  }
}

export default compose(
  connect(mapStateToProps, { setPopupData, togglePopupOpen }),
)(Popup);