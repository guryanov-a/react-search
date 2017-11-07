import { CHANGE_SEARCHED_TEXT } from '../constants';

const searchedText = (state = '', action) => {
  switch(action.type) {
    case CHANGE_SEARCHED_TEXT:
      return action.searchedText;
    default:
      return state;
  }
};

export default searchedText;
