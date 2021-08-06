import Books from './Books';
import React from 'react';

class BooksContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Books {...this.props} />
    )
  }
}

export default BooksContainer;