import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchQuery } from '../api';
import Tabs from './Tabs';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
  chooseArticleType,
} from "../actions";

class ArticleTypeTabs extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick = (e) => {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();

    store.dispatch(changeSearchOffset(0));
    store.dispatch(changeSearchOffsetEnd(searchResultsLimit));
    store.dispatch(changeCurrentPage(0));
    store.dispatch(chooseArticleType(e.target.dataset.articleType));

    searchQuery(store);
  };

  render() {
    const { store } = this.context;
    const { articleTypes } = store.getState();

    return <Tabs tabs={articleTypes} onTabClick={this.handleClick} />;
  }
}

ArticleTypeTabs.contextTypes = {
  store: PropTypes.object,
};

export default ArticleTypeTabs;
