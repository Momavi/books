import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './../common/preloader/Preloader'
import { getBooks, setCurrentPage } from './../../redux/books-reducer';
import {
  getBooksState,
  getPageSize,
  getTotalBooksCount,
  getCurrentPage,
  getIsFetching,
  getFormData,
} from '../../redux/books-selector'

class BooksContainer extends React.Component {
  componentDidMount() {
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getBooks(this.props.formData, pageNumber, 30)
  }
  render() {
    return (
      <>
        {
          !this.props.isFetching
            ?
            <Books
              books={this.props.books}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              totalBooksCount={this.props.totalBooksCount}
              currentPage={this.props.currentPage}
              isFetching={this.props.isFetching}
            />
            :
            <Preloader />
        }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    books: getBooksState(state),
    pageSize: getPageSize(state),
    totalBooksCount: getTotalBooksCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    formData: getFormData(state),
  }
}

export default compose(
  connect(mapStateToProps, { getBooks, setCurrentPage }),
)(BooksContainer);