import { createStore } from 'redux';
import { searchApp } from '../reducers';

const configureStore = () => {
  const persistedState = Object.assign(
    {},
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
  );

  return createStore(
    searchApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
};

export default configureStore;
