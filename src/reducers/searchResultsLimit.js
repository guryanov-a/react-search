import { CHANGE_SEARCH_LIMIT } from '../constants';

const searchResultsLimit = (state = 10, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_LIMIT:
      return action.searchResultsLimit;
    default:
      return state;
  }
};

export default searchResultsLimit;
