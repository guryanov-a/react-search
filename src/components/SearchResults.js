import React from 'react';
import store from '../store';
import ArticleTypeTabs from "./ArticleTypeTabs";
import ArticleTypeSelect from "./ArticleTypeSelect";
import SearchResultList from './SearchResultList';
import SearchInfo from './SearchInfo';
import SearchSort from "./SearchSort";

const SearchResults = ({ onPageClick }) => {
  const { areTabs } = store.getState();

  return (
    <div className="search-results">
      {
        areTabs && (
          <div className="search-results__article-type-filters">
            <ArticleTypeTabs />
            <ArticleTypeSelect />
          </div>
        )
      }
      <div className="search-results__header">
        <SearchInfo />
        <SearchSort />
      </div>
      <SearchResultList onPageClick={onPageClick} />
    </div>
  );
};

export default SearchResults;
