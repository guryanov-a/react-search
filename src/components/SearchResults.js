import React, { Component } from 'react';
import SearchResultList from './SearchResultList';
import SearchInfo from './SearchInfo';
import SearchSort from "./SearchSort";
import SearchResultsPagination from './SearchResultsPagination';
import ArticleTypeFilters from './ArticleTypeFilters';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <ArticleTypeFilters />
        <div className="search-results__header">
          <SearchInfo />
          <SearchSort />
        </div>
        <SearchResultList />
        <SearchResultsPagination />
      </div>
    );
  }
}

export default SearchResults;
