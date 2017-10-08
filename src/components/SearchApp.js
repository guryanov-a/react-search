import React from 'react';
import SearchResults from './SearchResults';
import ArticlesSearchForm from './ArticlesSearchForm';

const SearchApp = () => (
  <div className="search-app">
    <div className="container-fluid">
      <ArticlesSearchForm />
      <SearchResults />
    </div>
  </div>
);

export default SearchApp;