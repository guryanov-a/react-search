import { combineReducers } from 'redux';
import totalSearchResults from './totalSearchResultsCount';
import pageCount from './pageCount';
import searchResults from './searchResults.js';
import searchText from './searchText';
import searchedText from './searchedText';
import searchResultsLimit from './searchResultsLimit';
import searchOffset from './searchOffset';
import searchOffsetEnd from './searchOffsetEnd';
import pagination from './pagination';
import articleTypes from './articleTypes';
import sortTypes from './sortTypes';
import currentPage from './currentPage';
import tagFilters from './tagFilters';
import areFilters from './areFilters';
import areTabs from './areTabs';

export const searchApp = combineReducers({
  searchResults,
  searchText,
  totalSearchResults,
  pageCount,
  searchedText,
  searchResultsLimit,
  searchOffset,
  searchOffsetEnd,
  pagination,
  articleTypes,
  sortTypes,
  currentPage,
  tagFilters,
  areFilters,
  areTabs,
});
