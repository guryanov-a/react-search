import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInfo extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const {
      totalSearchResults,
      searchedText,
    } = store.getState();

    return (
      <div className="search-results__info">
        <span className="search-results__counter">{totalSearchResults} Results</span>
        {searchedText && <span className="hyphen">-</span> }
        <span className="search-results__search-word">{searchedText}</span>
      </div>
    );
  }
}

SearchInfo.contextTypes = {
  store: PropTypes.object,
};

export default SearchInfo;