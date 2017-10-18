export const changeSearchOffset = (searchOffset) => ({
  type: 'CHANGE_SEARCH_OFFSET',
  searchOffset,
});

export const changeSearchOffsetEnd = (searchOffsetEnd) => ({
  type: 'CHANGE_SEARCH_OFFSET_END',
  searchOffsetEnd,
});

export const changeCurrentPage = (selectedPage) => ({
  type: 'CHANGE_CURRENT_PAGE',
  selectedPage,
});

export const changeSearchedText = (searchedText) => ({
  type: 'CHANGE_SEARCHED_TEXT',
  searchedText,
});

export const changeSearchText = (searchText) => ({
  type: 'CHANGE_SEARCH_TEXT',
  searchText,
});

export const chooseArticleType = (articleType) => ({
  type: 'CHOOSE_ARTICLE_TYPE',
  articleType,
});

export const changeSearchLimit = (searchResultsLimit) => ({
  type: 'CHANGE_SEARCH_LIMIT',
  searchResultsLimit,
});

export const changePaginationMargin = (marginPagesDisplayed) => ({
  type: 'CHANGE_PAGINATION_MARGIN',
  marginPagesDisplayed,
});

export const changeSortType = (newActiveSortType) => ({
  type: 'CHANGE_SORT_TYPE',
  newActiveSortType,
});

export const toggleArticleTagFilter = (tagFilter) => ({
  type: 'TOGGLE_ARTICLE_TAG_FILTER',
  tagFilter,
});

export const changeSearchResultsCount = (totalSearchResults) => ({
  type: 'CHANGE_SEARCH_RESULTS_COUNT',
  totalSearchResults,
});

export const changePageCount = (pageCount) => ({
  type: 'CHANGE_PAGE_COUNT',
  pageCount,
});

export const changeSearchResults = (searchResults) => ({
  type: 'CHANGE_SEARCH_RESULTS',
  searchResults,
});

export const setArticleTypes = (articleTypes) => ({
  type: 'SET_ARTICLE_TYPES',
  articleTypes,
});

export const loadArticleTypes = (articleTypes) => ({
  type: 'LOAD_ARTICLE_TYPES',
  articleTypes,
});