import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQuery } from '../api';
import RouterTabs from './RouterTabs';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  chooseArticleType,
} from "../actions";

class ArticleTypeTabs extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.tabs !== prevProps.tabs) {
      const { state, dispatch } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    return (
      <RouterTabs {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tabs: state.articleTypes,
    searchResultsLimit: state.searchResultsLimit,
    state,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    tabs: stateProps.tabs,
    state: stateProps.state,
    dispatch: dispatchProps.dispatch,
    handleClick: (e) => {
      e.preventDefault();

      const { searchResultsLimit } = stateProps;

      dispatchProps.dispatch(changeSearchOffset(0));
      dispatchProps.dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatchProps.dispatch(changeCurrentPage(0));
      dispatchProps.dispatch(chooseArticleType(e.target.dataset.articleType));
    }
  })
};

ArticleTypeTabs = connect(
  mapStateToProps,
  null,
  mergeProps,
)(ArticleTypeTabs);

export default ArticleTypeTabs;
