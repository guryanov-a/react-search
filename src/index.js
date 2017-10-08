import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './components/SearchApp';
import { Provider } from "./utility/Provider";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Provider store={store} >
    <SearchApp />
  </Provider>,
  document.getElementById('root'),
);
