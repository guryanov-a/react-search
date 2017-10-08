import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleTypeTabs from './ArticleTypeTabs';
import ArticleTypeSelect from './ArticleTypeSelect';

class ArticleTypeFilters extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { areTabs } = store.getState();

    if(areTabs) {
      return (
        <div className="search-results__article-type-filters">
          <ArticleTypeTabs />
          <ArticleTypeSelect />
        </div>
      );
    } else {
      return null;
    }
  }
}

ArticleTypeFilters.contextTypes = {
  store: PropTypes.object,
};

export default ArticleTypeFilters;