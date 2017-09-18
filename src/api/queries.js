import store from '../store';

export const searchQuery = () => {
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
  if(activeArticleType !== 'All') {
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

  fetch(`articles${resultQuery}`).then( (response) => {
    const {
      totalSearchResults,
    } = store.getState();

    store.dispatch({
      type: 'CHANGE_SEARCH_RESULTS_COUNT',
      totalSearchResults: response.headers.get('X-Total-Count'),
    });

    store.dispatch({
      type: 'CHANGE_PAGE_COUNT',
      pageCount: Math.ceil(totalSearchResults / searchResultsLimit),
    });

    return response.json();
  }).then( (articles) => {
    store.dispatch({
      type: 'CHANGE_SEARCH_RESULTS',
      searchResults: articles,
    });
  })
};

export const filtersQuery = () => {
  fetch(`articleTypes`)
    .then(response => response.json())
    .then(articleTypes => {
      store.dispatch({
        type: 'SET_ARTICLE_TYPES',
        articleTypes,
      })
    })
    .catch(e => new Error(e));
};
