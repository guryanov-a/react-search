const pagination = (state = {
  marginPagesDisplayed: 1,
  pageRangeDisplayed: 3,
}, action) => {
  switch(action.type) {
    case 'CHANGE_PAGINATION_MARGIN':
      return {
        ...state,
        marginPagesDisplayed: action.marginPagesDisplayed,
      };
    default:
      return state;
  }
};

export default pagination;
