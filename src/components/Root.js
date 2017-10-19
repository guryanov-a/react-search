import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchApp from './SearchApp';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" component={SearchApp} />
    </BrowserRouter>
  </Provider>
);

export default Root;
