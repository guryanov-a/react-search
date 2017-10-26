import {
  changeSearchResultsCount,
  changePageCount,
  changeSearchResults,
  loadArticleTypes,
  chooseArticleType,
} from '../actions';

export const searchQuery = (state, dispatch) => {
  const {
    searchedText,
    searchResultsLimit,
    searchOffset,
    articleTypes,
    tagFilters,
    sortTypes,
  } = state;

  const resultQueryArray = [];

  // Pagination
  resultQueryArray.push(`_start=${searchOffset}`);
  resultQueryArray.push(`_limit=${searchResultsLimit}`);

  // Text search
  if(searchedText) {
    resultQueryArray.push(`q=${searchedText}`);
  }

  // Filtering by article type
  const activeArticleType = articleTypes.filter(articleType => articleType.isActive)[0].name;
  if(activeArticleType !== 'all') {
    resultQueryArray.push(`articleType=${activeArticleType}`);
  }

  // Filtering by article tags
  const activeTagFilters = tagFilters
    .filter(tagFilter => tagFilter.isActive)
    .map(tagFilter => tagFilter.name);
  if(activeTagFilters.length) {
    activeTagFilters.forEach(activeTagFilter => {
      resultQueryArray.push(`tagFilter=${activeTagFilter}`);
    });
  }

  // Sort
  const activeSortType = sortTypes.filter(sortType => sortType.isActive)[0].name;

  switch(activeSortType) {
    case 'latest':
      resultQueryArray.push(`_sort=postDate`);
      break;
    case 'popularity':
      resultQueryArray.push(`_sort=viewsCount`);
      break;
    case 'comments count':
      resultQueryArray.push(`_sort=commentsCount`);
      break;
    default:
      new Error('something wrong with sort types: there is no such sort type')
  }

  resultQueryArray.push(`_order=desc`);

  let resultQuery = `?${resultQueryArray.join('&')}`;

  fetch(`/articles${resultQuery}`).then( (response) => {
    const totalSearchResults = response.headers.get('X-Total-Count');

    dispatch(changeSearchResultsCount(totalSearchResults));
    dispatch(changePageCount(Math.ceil(totalSearchResults / searchResultsLimit)));

    return response.json();
  }).then( (articles) => {
    dispatch(changeSearchResults(articles));
  })
};

export const filtersQuery = (match, dispatch) => {
  fetch(`/articleTypes`)
    .then(response => response.json())
    .then(newArticleTypes => {
      dispatch(loadArticleTypes(newArticleTypes));
      dispatch(chooseArticleType(match.params.articleType || 'all'));
    })
    .catch(e => new Error(e));
};
