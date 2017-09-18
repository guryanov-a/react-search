const totalSearchResultsCount = (state = 0, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_RESULTS_COUNT':
      return action.totalSearchResults;
    default:
      return state;
  }
};

export default totalSearchResultsCount;
