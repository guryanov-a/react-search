import React from 'react';

const Tab = ({
  onClick,
  name,
  isActive,
}) => (
  <li
    role="presentation"
    className="filter-tab nav-item"
  >
    <a
      data-article-type={name}
      onClick={onClick}
      className={`filter-tab__button nav-link ${isActive ? 'active' : ''}`}
    >{name}</a>
  </li>
);

export default Tab;