import React from 'react';
import { Provider } from 'react-redux';
import SearchApp from './SearchApp';

const Root = ({store}) => (
  <Provider store={store}>
    <SearchApp />
  </Provider>
);

export default Root;