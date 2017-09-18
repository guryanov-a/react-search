import React from 'react';
import store from '../store';

const SearchInfo = () => {
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
};

export default SearchInfo;