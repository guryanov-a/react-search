import React from 'react';
import { connect } from 'react-redux';
import ArticleTypeTabs from './ArticleTypeTabs';
import ArticleTypeSelect from './ArticleTypeSelect';

let ArticleTypeFilters = ({ areTabs }) => {
  if(areTabs) {
    return (
      <div className="search-results__article-type-filters">
        <ArticleTypeTabs />
        <ArticleTypeSelect />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ areTabs }) => ({
  areTabs,
});

ArticleTypeFilters = connect(
  mapStateToProps,
)(ArticleTypeFilters);

export default ArticleTypeFilters;