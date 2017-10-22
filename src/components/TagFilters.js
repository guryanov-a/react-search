import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterList from './FilterList';
import { searchQuery, filtersQuery } from '../api';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  toggleArticleTagFilter,
} from '../actions';

class TagFilters extends Component {
  handleToggleFilterGroup = (e) => {
    const toggler = e.target;
    const filterGroup = toggler.closest('.filter-group');
    if(filterGroup.classList.contains('is-closed')) {
      filterGroup.classList.remove('is-closed');
    } else {
      filterGroup.classList.add('is-closed');
    }
  };

  onFilterItemChange = (e) => {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();
    const filter = e.target.value;

    store.dispatch(changeSearchOffset(0));
    store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
    store.dispatch(changeCurrentPage(0));
    store.dispatch(toggleArticleTagFilter(filter));

    searchQuery(store.getState(), store.dispatch);
  };

  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });

    filtersQuery(store);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const {
      tagFilters,
      searchedText,
    } = store.getState();

    return (
      <div className="search-filters">
        <h3 className="search-filters__title">Filter Results:</h3>
        <div className="filter-group">
          <div className="filter-group__header">
            <h4 className="filter-group__title">{ searchedText }</h4>
            <button className="filter-group__toggle" onClick={this.handleToggleFilterGroup}>Toggle filter group</button>
          </div>
          <FilterList
            filters={tagFilters}
            onFilterItemChange={onFilterItemChange}
          />
        </div>
      </div>
    );
  }
}

TagFilters.contextTypes = {
  store: PropTypes.object,
};

export default TagFilters;
