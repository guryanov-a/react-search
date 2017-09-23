import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';
import Tabs from './Tabs';

class ArticleTypeTabs extends Component {
  handleClick = (e) => {
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
    const { articleTypes } = store.getState();

    return <Tabs tabs={articleTypes} onTabClick={this.handleClick} />;
  }
}

export default ArticleTypeTabs;
