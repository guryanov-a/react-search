const searchOffset = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_OFFSET':
      return action.searchOffset;
    default:
      return state;
  }
};

export default searchOffset;
