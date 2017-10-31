import { createStore } from 'redux';
import { searchApp } from '../reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if(!console.group) {
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = rawDispatch(action);

    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  };
};

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

  const store = createStore(
    searchApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  if(process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  return store;
};

export default configureStore;
