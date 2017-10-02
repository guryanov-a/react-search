import React from 'react';

const SearchForm = ({
  onSearch,
  onSearchTextChange,
}) => (
  <div className="search-header">
    <form className="search-form" onSubmit={onSearch}>
      <h1 className="title page-title search-header__title">Search</h1>
      <div className="form-inline">
        <div className="form-group form-group__search">
          <input
            className="search-form__input form-control"
            type="text"
            onChange={onSearchTextChange}
            placeholder="Search..."
          />
        </div>
        <button className="btn btn-primary search-form__submit" type="submit">Search</button>
      </div>
    </form>
  </div>
);

export default SearchForm;
