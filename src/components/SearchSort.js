import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from "../api/queries";
import Select from './Select';

class SearchSort extends Component {
  handleSelectChange = (event) => {
    const { searchResultsLimit } = store.getState();

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
      type: 'CHANGE_SORT_TYPE',
      newActiveSortType: event.target.value,
    });

    searchQuery();
  };

  render() {
    const { sortTypes } = store.getState();

    return (
      <div className="search-sort">
        <label className="search-sort__label">
          Sort by
          <Select
            id="search-sort"
            className="search-sort__select"
            activeValue={sortTypes.filter(sortType => sortType.isActive)[0].name}
            onChange={this.handleSelectChange}
            options={sortTypes}
          />
        </label>
      </div>
    );
  }
}

export default SearchSort;
