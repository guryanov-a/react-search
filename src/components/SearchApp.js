import React from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

const SearchApp = () => (
  <div className="search-app">
    <div className="container-fluid">
      <SearchForm />
      <SearchResults />
    </div>
  </div>
);

export default SearchApp;