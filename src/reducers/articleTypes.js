import {
  LOAD_ARTICLE_TYPES,
  SET_ARTICLE_TYPES,
  CHOOSE_ARTICLE_TYPE,
} from '../constants';

const getResetArticleTypes = (articleTypes) => {
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
    case LOAD_ARTICLE_TYPES:
      const articleTypes = getResetArticleTypes(action.articleTypes);

      return [
        {
          name: 'all',
          isActive: true,
        },
        ...articleTypes,
      ];
    case SET_ARTICLE_TYPES:
      return action.articleTypes;
    case CHOOSE_ARTICLE_TYPE:
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
