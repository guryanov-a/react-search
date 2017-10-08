import React from 'react';
import SearchResult from './SearchResult';

const PreviewsList = ({
  previews,
  totalPreviews,
}) => (
  <div className="search-result-list">
    {
      totalPreviews > 0 &&
        <div className="search-results__body">
          {
            previews.map((preview, i) => {
              return <SearchResult
                key={i}
                {...preview}
              />;
            })
          }
        </div>
    }
  </div>
);

export default PreviewsList;