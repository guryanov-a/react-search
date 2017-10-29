import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    const {
      articleTypes,
      handleChange,
    } = this.props;

    return <Select
      activeValue={articleTypes.filter(articleType => articleType.isActive)[0].name}
      onChange={handleChange}
      options={articleTypes}
      className="filter-select"
    />;
  }
}

const mapStateToProps = (state) => ({
  state,
  articleTypes: state.articleTypes,
  searchResultsLimit: state.searchResultsLimit,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    handleChange(e) {
      const { searchResultsLimit } = stateProps;

      ownProps.history.push(e.target.value === 'all' ? '/' : e.target.value);

      dispatchProps.dispatch(changeSearchOffset(0));
      dispatchProps.dispatch(changeSearchOffsetEnd(searchResultsLimit));
      dispatchProps.dispatch(changeCurrentPage(0));
      dispatchProps.dispatch(chooseArticleType(e.target.value));
    },
  })
};

ArticleTypeSelect = withRouter(connect(
  mapStateToProps,
  null,
  mergeProps,
)(ArticleTypeSelect));

export default ArticleTypeSelect;
