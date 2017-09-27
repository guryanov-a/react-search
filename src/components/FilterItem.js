import React from 'react';

const FilterItem = ({
  name,
  isActive,
  onChange,
}) => (
  <li className="filter-list__item filter-item">
    <label className="filter-item__label">
      <input
        type="checkbox"
        className="filter-item__checkbox"
        checked={isActive}
        onChange={onChange}
        value={name}
      />
      <span className="filter-item__text">{ name }</span>
    </label>
  </li>
);

export default FilterItem;
