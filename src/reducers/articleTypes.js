const setArticleTypes = (articleTypes) => {
  return articleTypes.map(articleType => {
    return {
      name: articleType,
      isActive: false,
    };
  });
};

const articleTypes = (
  state = [
    {
      name: 'all',
      isActive: true,
    },
  ],
  action
) => {
  switch(action.type) {
    case 'SET_ARTICLE_TYPES':
      const articleTypesObjects = setArticleTypes(action.articleTypes);

      return [
        {
          name: 'all',
          isActive: true,
        },
        ...articleTypesObjects,
      ];
    case 'CHOOSE_ARTICLE_TYPE':
      return state.map(articleType => {
        if(articleType.name === action.articleType) {
          return {
            ...articleType,
            isActive: true,
          }
        }

        return {
          ...articleType,
          isActive: false,
        }
      });
    default:
      return state;
  }
};

export default articleTypes;
