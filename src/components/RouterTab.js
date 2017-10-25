import React from 'react';
import { Link } from 'react-router-dom';

const RouterTab = ({
  onClick,
  name,
  isActive,
}) => (
  <li
    role="presentation"
    className="filter-tab nav-item"
  >
    <Link
      data-article-type={name}
      onClick={onClick}
      className={`filter-tab__button nav-link ${isActive ? 'active' : ''}`}
      to={name === 'all' ? '/' : `/${name}`}
    >{name}</Link>
  </li>
);

export default RouterTab;
