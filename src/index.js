import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import SearchApp from './components/SearchApp';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const render = () => {
  ReactDOM.render(
    <SearchApp />,
    document.getElementById('root'),
  );
};

store.subscribe(render);
render();
