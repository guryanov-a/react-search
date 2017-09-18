import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';

class SearchForm extends Component {
  handleSearchChange = (e) => {
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

    this.input.value = '';
    store.dispatch({
      type: 'CHANGE_SEARCH_TEXT',
      searchText: '',
    });
  };

  render() {
    return (
      <div className="search-header">
        <form className="search-form" onSubmit={this.handleSearch}>
          <h1 className="title page-title search-header__title">Search</h1>
          <div className="form-inline">
            <div className="form-group form-group__search">
              <input
                className="search-form__input form-control"
                type="text"
                onChange={this.handleSearchChange}
                placeholder="Search..."
                ref={node => this.input = node}
              />
            </div>
            <button className="btn btn-primary search-form__submit" type="submit">Search</button>
          </div>

        </form>
      </div>
    );
  }
}

export default SearchForm;
