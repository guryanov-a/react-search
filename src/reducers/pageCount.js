import { CHANGE_PAGE_COUNT } from '../constants';

const pageCount = (state = 0, action) => {
  switch(action.type) {
    case CHANGE_PAGE_COUNT:
      return action.pageCount;
    default:
      return state;
  }
};

export default pageCount;
