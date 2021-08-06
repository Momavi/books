import Search from './Search';
import React from 'react';

class SearchContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Search {...this.props} />
    )
  }
}

export default SearchContainer;