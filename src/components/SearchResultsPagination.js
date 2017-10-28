import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-paginate';
import { searchQuery } from '../api';
import {
  changeSearchOffset,
  changeSearchOffsetEnd,
  changeCurrentPage,
} from '../actions';

class SearchResultsPagination extends Component {
  componentDidUpdate(prevProps) {
    const { currentPage } = this.props;

    if(currentPage !== prevProps.currentPage) {
      const { state, dispatch } = this.props;

      searchQuery(state, dispatch);
    }
  }

  render() {
    const {
      totalSearchResults,
      marginPagesDisplayed,
      pageRangeDisplayed,
      pageCount,
      currentPage,
      searchResultsLimit,
      handlePageClick,
    } = this.props;

    if(searchResultsLimit <= totalSearchResults) {
      return (
        <nav>
          <Pagination
            className="pagination"
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me page-item page-link disabled"}
            pageCount={pageCount}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
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
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  state,
  totalSearchResults: state.totalSearchResults,
  marginPagesDisplayed: state.pagination.marginPagesDisplayed,
  pageRangeDisplayed: state.pagination.pageRangeDisplayed,
  pageCount: state.pageCount,
  currentPage: state.currentPage,
  searchResultsLimit: state.searchResultsLimit,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, {
    dispatch: dispatchProps.dispatch,
    handlePageClick: (data) => {
      const { searchResultsLimit } = stateProps;
      const { dispatch } = dispatchProps;

      let selectedPage = data.selected;
      let offset = Math.ceil(selectedPage * searchResultsLimit);
      let offsetEnd = Math.ceil(selectedPage * searchResultsLimit + searchResultsLimit);

      dispatch(changeSearchOffset(offset));
      dispatch(changeSearchOffsetEnd(offsetEnd));
      dispatch(changeCurrentPage(selectedPage));
    }
  })
};

SearchResultsPagination = connect(
  mapStateToProps,
  null,
  mergeProps,
)(SearchResultsPagination);

export default SearchResultsPagination;
