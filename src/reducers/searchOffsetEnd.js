import { CHANGE_SEARCH_OFFSET_END } from '../constants';

const searchOffsetEnd = (state = 10, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_OFFSET_END:
      return action.searchOffsetEnd;
    default:
      return state;
  }
};

export default searchOffsetEnd;
