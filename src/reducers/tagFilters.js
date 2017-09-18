const searchFilters = (state = [], action) => {
  switch(action.type) {
    case 'SET_ARTICLE_TAG_FILTERS':
      return action.tagFilters.map(tagFilter => {
        return {
          name: tagFilter,
          isActive: false,
        };
      });
    case 'TOGGLE_ARTICLE_TAG_FILTER':
      return state.map(tagFilter => {
        if(tagFilter.name === action.tagFilter) {
          return {
            ...tagFilter,
            isActive: !tagFilter.isActive,
          }
        }

        return tagFilter;
      });
    default:
      return state;
  }
};

export default searchFilters;
