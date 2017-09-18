import React, { Component } from 'react';
import store from '../store';
import { searchQuery } from '../api';

class ArticleTypeSelect extends Component {
  handleChange = (e) => {
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
      articleType: e.target.value,
    });

    searchQuery();
  };

  render() {
    const { articleTypes } = store.getState();

    return (
      <select
        value={articleTypes.filter(articleType => articleType.isActive)[0].name}
        className="filter-select form-control"
        onChange={this.handleChange}
      >
        {
          articleTypes.map((articleType, i) => {
            return <option
              key={i}
              value={articleType.name}
            >{articleType.name}</option>
          })
        }
      </select>
    );
  }
}

export default ArticleTypeSelect;
