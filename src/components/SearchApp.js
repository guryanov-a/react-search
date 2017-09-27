import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import store from '../store';
import { searchQuery } from '../api';
import { filtersQuery } from "../api/queries";

class SearchApp extends Component {
  handleSearchTextChange = (e) => {
    store.dispatch({
      type: 'CHANGE_SEARCH_TEXT',
      searchText: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();

    const {
      searchResultsLimit,
      searchText,
    } = store.getState();

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET',
      searchOffset: 0,
    });

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET_END',
      searchOffsetEnd: searchResultsLimit,
    });

    store.dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      selectedPage: 0,
    });

    store.dispatch({
      type: 'CHANGE_SEARCHED_TEXT',
      searchedText: searchText,
    });

    searchQuery();

    e.target.reset();
    store.dispatch({
      type: 'CHANGE_SEARCH_TEXT',
      searchText: '',
    });
  };

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
    return (
      <div className="search-app">
        <div className="container-fluid">
          <SearchForm onSearch={this.handleSearch} onSearchTextChange={this.handleSearchTextChange} />
          <SearchResults onPageClick={this.handlePageClick} />
        </div>
      </div>
    );
  }
}

export default SearchApp;