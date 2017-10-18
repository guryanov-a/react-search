import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchQuery } from '../api';
import Select from './Select';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  chooseArticleType,
} from "../actions";

class ArticleTypeSelect extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = (e) => {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();

    store.dispatch(changeSearchOffset(0));
    store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
    store.dispatch(changeCurrentPage(0));
    store.dispatch(chooseArticleType(e.target.value));

    searchQuery(store);
  };

  render() {
    const { store } = this.context;
    const { articleTypes } = store.getState();

    return <Select
      activeValue={articleTypes.filter(articleType => articleType.isActive)[0].name}
      onChange={this.handleChange}
      options={articleTypes}
      className="filter-select"
    />;
  }
}

ArticleTypeSelect.contextTypes = {
  store: PropTypes.object,
};

export default ArticleTypeSelect;
