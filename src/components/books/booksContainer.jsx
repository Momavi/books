import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getBooks, setCurrentPage } from '../../redux/books-reducer';
import {
  getBooksState,
  getPageSize,
  getTotalBooksCount,
  getCurrentPage,
  getIsFetching,
} from '../../redux/books-selector'
import Preloader from './../common/preloader/Preloader'

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }
  onPageChanged = (pageNumber) => {
    this.props.getBooks();
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Books
          books={this.props.books}
          pageSize={this.props.pageSize}
          totalBooksCount={this.props.totalBooksCount}
          currentPage={this.props.currentPage}
        />
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
  }
}

export default compose(
  connect(mapStateToProps, { getBooks, setCurrentPage }),
)(BooksContainer);