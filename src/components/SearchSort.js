import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchQuery } from "../api/queries";
import Select from './Select';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  changeSortType,
} from '../actions';

class SearchSort extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSelectChange = (event) => {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();

    store.dispatch(changeSearchOffset(0));
    store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
    store.dispatch(changeCurrentPage(0));
    store.dispatch(changeSortType(event.target.value));

    searchQuery(store);
  };

  render() {
    const { store } = this.context;
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

SearchSort.contextTypes = {
  store: PropTypes.object,
};

export default SearchSort;
