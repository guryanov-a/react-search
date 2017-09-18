import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from "../api/queries";

class SearchSort extends Component {
  handleSelectChange = (event) => {
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
          <select
            id="search-sort"
            className="search-sort__select form-control"
            value={store.getState().sortTypes.filter(sortType => sortType.isActive)[0].name}
            onChange={this.handleSelectChange}
          >
            {
              sortTypes.map((sortType, i) => {
                return <option key={i} value={sortType.name}>{sortType.name}</option>
              })
            }
          </select>
        </label>
      </div>
    );
  }
}

export default SearchSort;
