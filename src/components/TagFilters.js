import React, { Component } from 'react';
import store from '../store';
import FilterItem from './FilterItem';
import { searchQuery, filtersQuery } from '../api';

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

  onFilterItemClick = (e) => {
    const filter = e.target.value;
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
      type: 'TOGGLE_ARTICLE_TAG_FILTER',
      tagFilter: filter,
    });

    searchQuery();
  };

  componentDidMount() {
    filtersQuery();
  }

  render() {
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
          <ul className="filter-group__list filter-list">
            {
              tagFilters.map((tagFilter, i) =>
                <FilterItem
                  key={i}
                  {...tagFilter}
                  handleChange={this.onFilterItemClick}
                />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TagFilters;
