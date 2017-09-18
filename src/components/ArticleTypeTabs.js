import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';

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
          articleTypes.map((articleType, i) => {
            return <li
              key={i}
              role="presentation"
              className={`filter-tab nav-item`}
            >
              <a
                data-article-type={articleType.name}
                onClick={this.handleClick}
                className={`filter-tab__button nav-link ${articleType.isActive ? 'active' : ''}`}
              >{articleType.name}</a>
            </li>
          })
        }
      </ul>
    );
  }
}

export default ArticleTypeTabs;
