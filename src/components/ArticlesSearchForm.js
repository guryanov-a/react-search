import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import {
  searchQuery,
  filtersQuery,
} from '../api';
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
  componentDidMount() {
    const {
      state,
      dispatch,
      searchResultsLimit,
      match
    } = this.props;

    if (window.innerWidth < 768) {
      dispatch(changeSearchLimit(6));
      dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatch(changePaginationMargin(0));
    }

    filtersQuery(match, dispatch);
    searchQuery(state, dispatch);
  }

  componentDidUpdate(prevProps) {
    if(this.props.searchedText !== prevProps.searchedText) {
      const {
        state,
        dispatch,
      } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    const {
      handleSearch,
      handleSearchTextChange,
    } = this.props;

    return <SearchForm onSearch={handleSearch} onSearchTextChange={handleSearchTextChange} />;
  }
}

const mapStateToProps = (state) => ({
  state,
  searchResultsLimit: state.searchResultsLimit,
  searchText: state.searchText,
  searchedText: state.searchedText,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  handleSearchTextChange(e) {
    dispatch(changeSearchText(e.target.value));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    handleSearch(e) {
      e.preventDefault();

      const {
        searchResultsLimit,
        searchText,
      } = stateProps;
      const { dispatch } = dispatchProps;

      dispatch(changeSearchOffset(0));
      dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatch(changeCurrentPage(0));
      dispatch(changeSearchedText(searchText));
      dispatch(changeSearchText(''));

      e.target.reset();
    }
  })
};

ArticlesSearchForm = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(ArticlesSearchForm));

export default ArticlesSearchForm;
