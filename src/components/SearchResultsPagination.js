import React, { Component } from 'react';
import store from '../store';
import Pagination from 'react-paginate';
import { searchQuery } from '../api';

class SearchResultsPagination extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handlePageClick = (data) => {
    const {
      searchResultsLimit,
    } = store.getState();

    let selectedPage = data.selected;
    let offset = Math.ceil(selectedPage * searchResultsLimit);
    let offsetEnd = Math.ceil(selectedPage * searchResultsLimit + searchResultsLimit);

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET',
      searchOffset: offset,
    });

    store.dispatch({
      type: 'CHANGE_SEARCH_OFFSET_END',
      searchOffsetEnd: offsetEnd,
    });

    store.dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      selectedPage,
    });

    searchQuery();
  };

  render() {
    const {
      totalSearchResults,
      pagination,
      pageCount,
      currentPage,
      searchResultsLimit,
    } = store.getState();

    if(searchResultsLimit <= totalSearchResults) {
      return (
        <nav aria-label="Page navigation example">
          <Pagination
            className="pagination"
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me page-item page-link disabled"}
            pageCount={pageCount}
            marginPagesDisplayed={pagination.marginPagesDisplayed}
            pageRangeDisplayed={pagination.pageRangeDisplayed}
            onPageChange={this.handlePageClick}
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
      )
    } else {
      return null;
    }
  }
}

export default SearchResultsPagination;
