import React, { Component } from 'react';
import SearchResults from './SearchResults';
import ArticlesSearchForm from './ArticlesSearchForm';

class SearchApp extends Component {
  render() {
    return (
      <div className="search-app">
        <div className="container-fluid">
          <ArticlesSearchForm />
          <SearchResults />
        </div>
      </div>
    );
  }
}

export default SearchApp;