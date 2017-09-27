import React from 'react';
import FilterItem from './FilterItem';

const FilterList = ({
  filters,
  onFilterItemClick,
}) => (
  <ul className="filter-group__list filter-list">
    {
      filters.map((filter, i) =>
        <FilterItem
          key={i}
          {...filter}
          onChange={onFilterItemClick}
        />
      )
    }
  </ul>
);

export default FilterList;