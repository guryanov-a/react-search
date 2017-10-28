import React from 'react';
import { connect } from 'react-redux';

let SearchInfo = ({ totalSearchResults, searchedText }) => (
  <div className="search-results__info">
    <span className="search-results__counter">{totalSearchResults} Results</span>
    {searchedText && <span className="hyphen">-</span> }
    <span className="search-results__search-word">{searchedText}</span>
  </div>
);

const mapStateToProps = (state) => ({
  totalSearchResults: state.totalSearchResults,
  searchedText: state.searchedText,
});

SearchInfo = connect(
  mapStateToProps,
)(SearchInfo);

export default SearchInfo;