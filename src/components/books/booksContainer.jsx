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

class BooksContainer extends React.Component {
  componentDidMount() {
    const { currentPage } = this.props;
    this.props.getBooks(currentPage, 'apple', 30);
  }
  onPageChanged = (pageNumber) => {
    this.props.getBooks(pageNumber, 'apple', 30);
  }
  render() {
    return (
      <>
        <Books
          books={this.props.books}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          totalBooksCount={this.props.totalBooksCount}
          currentPage={this.props.currentPage}
          isFetching={this.props.isFetching}
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