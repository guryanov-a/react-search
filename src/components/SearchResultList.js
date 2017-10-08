import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewsList from './PreviewsList';

class SearchResultList extends Component {
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
    const {
      searchResults,
      totalSearchResults,
    } = store.getState();

    return <PreviewsList
      previews={searchResults}
      totalPreviews={totalSearchResults}
    />;
  }
}

SearchResultList.contextTypes = {
  store: PropTypes.object,
};

export default SearchResultList;