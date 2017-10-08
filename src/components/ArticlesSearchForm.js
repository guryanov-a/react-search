import React, { Component } from 'react';
import SearchForm from './SearchForm';
import store from '../store';
import { searchQuery } from '../api';
import { filtersQuery } from "../api/queries";

class ArticlesSearchForm extends Component {
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

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });

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

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <SearchForm onSearch={this.handleSearch} onSearchTextChange={this.handleSearchTextChange} />;
  }
}

export default ArticlesSearchForm;