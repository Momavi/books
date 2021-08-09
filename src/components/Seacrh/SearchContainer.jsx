import Search from './Search';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setFormData, getBooks } from './../../redux/books-reducer'

let mapStateToProps = (state) => {
  return {
    booksPage: state.booksPage,
  }
}

export default compose(
  connect(mapStateToProps, { setFormData, getBooks }),
)(Search);