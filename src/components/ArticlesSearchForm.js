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

const mapStateToProps = (state) => {
  return {
    searchResultsLimit: state.searchResultsLimit,
    searchText: state.searchText,
    searchedText: state.searchedText,
    state,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    dispatch: dispatchProps.dispatch,
    searchResultsLimit: stateProps.searchResultsLimit,
    searchText: stateProps.searchText,
    searchedText: stateProps.searchedText,
    state: stateProps.state,
    handleSearchTextChange: (e) => {
      dispatchProps.dispatch(changeSearchText(e.target.value));
    },
    handleSearch: (e) => {
      e.preventDefault();

      const {
        searchResultsLimit,
        searchText,
      } = stateProps;

      dispatchProps.dispatch(changeSearchOffset(0));
      dispatchProps.dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatchProps.dispatch(changeCurrentPage(0));
      dispatchProps.dispatch(changeSearchedText(searchText));

      e.target.reset();
      dispatchProps.dispatch(changeSearchText(''));
    }
  })
};

ArticlesSearchForm = withRouter(connect(
  mapStateToProps,
  null,
  mergeProps,
)(ArticlesSearchForm));

export default ArticlesSearchForm;
