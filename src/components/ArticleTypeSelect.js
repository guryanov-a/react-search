import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQuery } from '../api';
import Select from './Select';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  chooseArticleType,
} from "../actions";

class ArticleTypeSelect extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.tabs !== prevProps.tabs) {
      const { state, dispatch } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    const { articleTypes } = this.props;

    return <Select
      activeValue={articleTypes.filter(articleType => articleType.isActive)[0].name}
      onChange={this.handleChange}
      options={articleTypes}
      className="filter-select"
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    articleTypes: state.articleTypes,
    state,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    articleTypes: stateProps.articleTypes,
    dispatch: dispatchProps.dispatch,
    handleChange: (e) => {
      const { searchResultsLimit } = stateProps;

      dispatchProps.dispatch(changeSearchOffset(0));
      dispatchProps.dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatchProps.dispatch(changeCurrentPage(0));
      dispatchProps.dispatch(chooseArticleType(e.target.value));
    },
  })
};

ArticleTypeSelect = connect(
  mapStateToProps,
  null,
  mergeProps,
)(ArticleTypeSelect);

export default ArticleTypeSelect;
