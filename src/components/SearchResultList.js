import React from 'react';
import store from '../store';
import SearchResultsPagination from 'react-paginate';
import SearchResult from './SearchResult';

const SearchResultList = ({ handlePageClick }) => {
  const {
    searchResults,
    totalSearchResults,
    pagination,
    pageCount,
    currentPage,
    searchResultsLimit,
  } = store.getState();

  return (
    <div className="search-result-list">
      {
        totalSearchResults > 0 &&
          <div className="search-results__body">
            {
              searchResults.map((searchResult, i) => {
                return <SearchResult
                  key={i}
                  {...searchResult}
                />;
              })
            }
          </div>
      }
      {
        searchResultsLimit <= totalSearchResults &&
          <nav aria-label="Page navigation example">
            <SearchResultsPagination
              className="pagination"
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me page-item page-link disabled"}
              pageCount={pageCount}
              marginPagesDisplayed={pagination.marginPagesDisplayed}
              pageRangeDisplayed={pagination.pageRangeDisplayed}
              onPageChange={handlePageClick}
              initialPage={currentPage}
              forcePage={currentPage}
              containerClassName={"pagination search-results-pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
            />
          </nav>
      }
    </div>
  );
};

export default SearchResultList;