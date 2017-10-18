import { createStore } from 'redux';
import { loadState, saveState } from '../utility';
import { searchApp } from '../reducers';
import { throttle } from 'lodash';

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
    loadState(),
  );

  const store = createStore(
    searchApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
