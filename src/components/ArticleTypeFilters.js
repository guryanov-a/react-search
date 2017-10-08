import React, { Component } from 'react';
import store from '../store';
import ArticleTypeTabs from './ArticleTypeTabs';
import ArticleTypeSelect from './ArticleTypeSelect';

class ArticleTypeFilters extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {
      areTabs,
    } = store.getState();

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

export default ArticleTypeFilters;