import React, { Component } from 'react';
import store from '../store';
import PreviewsList from './PreviewsList';

class SearchResultList extends Component {
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
      searchResults,
      totalSearchResults,
    } = store.getState();

    return <PreviewsList
      previews={searchResults}
      totalPreviews={totalSearchResults}
    />;
  }
};

export default SearchResultList;