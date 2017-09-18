import React, { Component } from 'react';

class FilterItem extends Component {
  render() {
    const { name, isActive, handleChange } = this.props;

    return (
      <li className="filter-list__item filter-item">
        <label className="filter-item__label">
          <input
            type="checkbox"
            className="filter-item__checkbox"
            checked={isActive}
            onChange={handleChange}
            value={name}
          />
          <span className="filter-item__text">{ name }</span>
        </label>
      </li>
    );
  }
}

export default FilterItem;
