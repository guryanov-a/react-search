import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-paginate';
import { searchQuery } from '../api';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
} from '../actions';

class SearchResultsPagination extends Component {
  componentDidMount() {
    const { store } = this.context;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handlePageClick = (data) => {
    const { store } = this.context;
    const { searchResultsLimit } = store.getState();

    let selectedPage = data.selected;
    let offset = Math.ceil(selectedPage * searchResultsLimit);
    let offsetEnd = Math.ceil(selectedPage * searchResultsLimit + searchResultsLimit);

    store.dispatch(changeSearchOffset(offset));
    store.dispatch(changeSearchOffsetEnd(offsetEnd));
    store.dispatch(changeCurrentPage(selectedPage));

    searchQuery();
  };

  render() {
    const { store } = this.context;
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

SearchResultsPagination.contextTypes = {
  store: PropTypes.object,
};

export default SearchResultsPagination;
