import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const SearchResult = ({
  image,
  url,
  title,
  description,
  postDate,
  author,
  viewsCount,
  commentsCount,
  articleType,
}) => {
  const dateObject = moment(postDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="search-result">
      <div className="row">
        <div className="col-3">
          <img className="search-result__image" src="https://via.placeholder.com/270x200" alt="meaningful description" />
        </div>
        <div className="col">
          <div className="search-result__main-info">
            <span className="search-result__date">
              <span className="search-result-field__text">
                {dateObject.date()}
                {' '}
                {monthNames[dateObject.month()]}
                {' '}
                {dateObject.year()}
              </span>
            </span>
            <span className="search-result__article-type">
              <span className="badge badge-primary">
                {articleType}
              </span>
            </span>
            <span className="search-result__author">
              Author: {author}
            </span>
          </div>
          <h2 className="search-result__title">
            <a href={url}>{title}</a>
          </h2>
          <div className="search-result__description">{description}</div>
          <div className="search-result__add-info">
            <span className="search-result__comments-count">
              Comments - {commentsCount}
            </span>
            <span className="search-result__views-count">
              Views - {viewsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  commentsCount: PropTypes.number,
};

export default SearchResult;
