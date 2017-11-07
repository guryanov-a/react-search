import * as constants from '../constants';

export const changeSearchOffset = (searchOffset) => ({
  type: constants.CHANGE_SEARCH_OFFSET,
  searchOffset,
});

export const changeSearchOffsetEnd = (searchOffsetEnd) => ({
  type: constants.CHANGE_SEARCH_OFFSET_END,
  searchOffsetEnd,
});

export const changeCurrentPage = (selectedPage) => ({
  type: constants.CHANGE_CURRENT_PAGE,
  selectedPage,
});

export const changeSearchedText = (searchedText) => ({
  type: constants.CHANGE_SEARCHED_TEXT,
  searchedText,
});

export const changeSearchText = (searchText) => ({
  type: constants.CHANGE_SEARCH_TEXT,
  searchText,
});

export const chooseArticleType = (articleType) => ({
  type: constants.CHOOSE_ARTICLE_TYPE,
  articleType,
});

export const changeSearchLimit = (searchResultsLimit) => ({
  type: constants.CHANGE_SEARCH_LIMIT,
  searchResultsLimit,
});

export const changePaginationMargin = (marginPagesDisplayed) => ({
  type: constants.CHANGE_PAGINATION_MARGIN,
  marginPagesDisplayed,
});

export const changeSortType = (newActiveSortType) => ({
  type: constants.CHANGE_SORT_TYPE,
  newActiveSortType,
});

export const toggleArticleTagFilter = (tagFilter) => ({
  type: constants.TOGGLE_ARTICLE_TAG_FILTER,
  tagFilter,
});

export const changeSearchResultsCount = (totalSearchResults) => ({
  type: constants.CHANGE_SEARCH_RESULTS_COUNT,
  totalSearchResults,
});

export const changePageCount = (pageCount) => ({
  type: constants.CHANGE_PAGE_COUNT,
  pageCount,
});

export const changeSearchResults = (searchResults) => ({
  type: constants.CHANGE_SEARCH_RESULTS,
  searchResults,
});

export const setArticleTypes = (articleTypes) => ({
  type: constants.SET_ARTICLE_TYPES,
  articleTypes,
});

export const loadArticleTypes = (articleTypes) => ({
  type: constants.LOAD_ARTICLE_TYPES,
  articleTypes,
});