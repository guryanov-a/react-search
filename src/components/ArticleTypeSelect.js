import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchQuery } from '../api';
import Select from './Select';

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
