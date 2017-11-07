import { CHANGE_CURRENT_PAGE } from '../constants';

const currentPage = (state = 0, action) => {
  switch(action.type) {
    case CHANGE_CURRENT_PAGE:
      return action.selectedPage;
    default:
      return state;
  }
};

export default currentPage;
