import { CHANGE_SEARCH_RESULTS } from '../constants';

const searchResults = (state = [], action) => {
  switch(action.type) {
    case CHANGE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};

export default searchResults;
