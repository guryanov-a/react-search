import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import { searchQuery } from '../api';
import { filtersQuery } from "../api/queries";
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  changeSearchedText,
  changeSearchText,
  changeSearchLimit,
  changePaginationMargin,
} from "../actions";

class ArticlesSearchForm extends Component {
  handleSearchTextChange = (e) => {
    const { store } = this.context;

    store.dispatch(changeSearchText(e.target.value));
  };

  handleSearch = (e) => {
    const { store } = this.context;

    e.preventDefault();

    const {
      searchResultsLimit,
      searchText,
    } = store.getState();

    store.dispatch(changeSearchOffset(0));
    store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
    store.dispatch(changeCurrentPage(0));
    store.dispatch(changeSearchedText(searchText));

    searchQuery();

    e.target.reset();
    store.dispatch(changeSearchText(''));
  };

  componentDidMount() {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();

    store.subscribe(() => {
      this.forceUpdate();
    });

    if (window.innerWidth < 768) {
      store.dispatch(changeSearchLimit(6));
      store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
      store.dispatch(changePaginationMargin(0));
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

ArticlesSearchForm.contextTypes = {
  store: PropTypes.object,
};

export default ArticlesSearchForm;