import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';
import Tab from './Tab';

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

    return (
      <ul className="filter-tabs nav nav-tabs">
        {
          articleTypes.map((articleType, i) => (
            <Tab
              key={i}
              name={articleType.name}
              isActive={articleType.isActive}
              onClick={this.handleClick}
            />
          ))
        }
      </ul>
    );
  }
}

export default ArticleTypeTabs;
