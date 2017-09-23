import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';
import ArticleTypeTabs from "./ArticleTypeTabs";
import ArticleTypeSelect from "./ArticleTypeSelect";
import SearchResultList from './SearchResultList';
import SearchInfo from './SearchInfo';
import SearchSort from "./SearchSort";
import {filtersQuery} from "../api/queries";

class SearchResults extends Component {
  handlePageClick = (data) => {
    const {
      searchResultsLimit,
    } = store.getState();

    let selectedPage = data.selected;
    let offset = Math.ceil(selectedPage * searchResultsLimit);
    let offsetEnd = Math.ceil(selectedPage * searchResultsLimit + searchResultsLimit);

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET',
      searchOffset: offset,
    });

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET_END',
      searchOffsetEnd: offsetEnd,
    });

    store.dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      selectedPage,
    });

    searchQuery();
  };

  componentDidMount() {
    if (window.innerWidth < 768) {
      store.dispatch({
        type: 'CHANGE_SEARCH_LIMIT',
        searchResultsLimit: 6,
      });

      store.dispatch({
        type: 'CHANGE_SEARCH_OFFSET_END',
        searchOffsetEnd: store.getState().searchResultsLimit,
      });

      store.dispatch({
        type: 'CHANGE_PAGINATION_MARGIN',
        marginPagesDisplayed: 0,
      });
    }

    filtersQuery();
    searchQuery();
  }

  render() {
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
        <SearchResultList handlePageClick={this.handlePageClick} />
      </div>
    );
  }
}

export default SearchResults;
