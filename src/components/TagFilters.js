import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterList from './FilterList';
import { searchQuery, filtersQuery } from '../api';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  toggleArticleTagFilter,
} from '../actions';

class TagFilters extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    filtersQuery(null, dispatch);
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;

    if(filter !== prevProps.filter) {
      const { state, dispatch } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    const {
      tagFilters,
      searchedText,
      handleToggleFilterGroup,
      onFilterItemChange,
    } = this.props;

    return (
      <div className="search-filters">
        <h3 className="search-filters__title">Filter Results:</h3>
        <div className="filter-group">
          <div className="filter-group__header">
            <h4 className="filter-group__title">{ searchedText }</h4>
            <button className="filter-group__toggle" onClick={handleToggleFilterGroup}>Toggle filter group</button>
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

const mapStateToProps = (state) => ({
  searchResultsLimit: state.searchResultsLimit,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    handleToggleFilterGroup(e) {
      const toggler = e.target;
      const filterGroup = toggler.closest('.filter-group');

      if(filterGroup.classList.contains('is-closed')) {
        filterGroup.classList.remove('is-closed');
      } else {
        filterGroup.classList.add('is-closed');
      }
    },
    onFilterItemChange(e) {
      const { searchResultsLimit } = stateProps;
      const { dispatch } = dispatchProps;
      const filter = e.target.value;

      dispatch(changeSearchOffset(0));
      dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatch(changeCurrentPage(0));
      dispatch(toggleArticleTagFilter(filter));
    },
  });
};

TagFilters = connect(
  mapStateToProps,
  null,
  mergeProps,
)(TagFilters);

export default TagFilters;
