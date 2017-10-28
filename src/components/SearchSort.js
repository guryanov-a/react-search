import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQuery } from "../api/queries";
import Select from './Select';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  changeSortType,
} from '../actions';

class SearchSort extends Component {
  componentDidUpdate(prevProps) {
    const { sortTypes } = this.props;

    if(sortTypes !== prevProps.sortTypes) {
      const { state, dispatch } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    const {
      sortTypes,
      handleSelectChange,
    } = this.props;

    return (
      <div className="search-sort">
        <label className="search-sort__label">
          Sort by
          <Select
            id="search-sort"
            className="search-sort__select"
            activeValue={sortTypes.filter(sortType => sortType.isActive)[0].name}
            onChange={handleSelectChange}
            options={sortTypes}
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  sortTypes: state.sortTypes,
  searchResultsLimit: state.searchResultsLimit,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, {
    dispatch: dispatchProps.dispatch,
    handleSelectChange: (event) => {
      const { searchResultsLimit } = stateProps;
      const { dispatch } = dispatchProps;

      dispatch(changeSearchOffset(0));
      dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatch(changeCurrentPage(0));
      dispatch(changeSortType(event.target.value));
    }
  });
};

SearchSort = connect(
  mapStateToProps,
  null,
  mergeProps,
)(SearchSort);

export default SearchSort;
