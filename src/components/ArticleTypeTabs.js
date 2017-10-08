import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchQuery } from '../api';
import Tabs from './Tabs';

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
      type: 'CHOOSE_ARTICLE_TYPE',
      articleType: e.target.dataset.articleType,
    });

    searchQuery();
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
