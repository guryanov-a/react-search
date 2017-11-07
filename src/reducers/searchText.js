import { CHANGE_SEARCH_TEXT } from '../constants';

const searchText = (state = '', action) => {
  switch(action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  }
};

export default searchText;
