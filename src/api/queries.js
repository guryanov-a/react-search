import {
  changeSearchResultsCount,
  changePageCount,
  changeSearchResults,
  loadArticleTypes,
} from '../actions';

export const searchQuery = (store) => {
  const {
    searchedText,
    searchResultsLimit,
    searchOffset,
    articleTypes,
    tagFilters,
    sortTypes,
  } = store.getState();

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
    const {
      totalSearchResults,
    } = store.getState();

    store.dispatch(changeSearchResultsCount(response.headers.get('X-Total-Count')));
    store.dispatch(changePageCount(Math.ceil(totalSearchResults / searchResultsLimit)));

    return response.json();
  }).then( (articles) => {
    store.dispatch(changeSearchResults(articles));
  })
};

export const filtersQuery = (store) => {
  fetch(`/articleTypes`)
    .then(response => response.json())
    .then(newArticleTypes => {
      store.dispatch(loadArticleTypes(newArticleTypes));
    })
    .catch(e => new Error(e));
};
