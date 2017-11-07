import { CHANGE_SORT_TYPE } from '../constants';

const sortType = (state = [], action) => {
  switch(action.type) {
    case CHANGE_SORT_TYPE:
      return state.map(sortType => {
        if (sortType.name !== action.newActiveSortType) {
          return {
            ...sortType,
            isActive: false,
          };
        }

        return {
          ...sortType,
          isActive: true,
        };
      });
    default:
      return state;
  }
};

export default sortType;
