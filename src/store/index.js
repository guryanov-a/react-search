import { createStore } from 'redux';
import { searchApp } from '../reducers';

const store = createStore(
  searchApp,
  {
    areTabs: true,
    areFilters: true,
    sortTypes: [
      {
        name: 'latest',
        isActive: true,
      },
      {
        name: 'popularity',
        isActive: false,
      },
      {
        name: 'comments count',
        isActive: false,
      },
    ],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
