import React from 'react';
import RouterTab from './RouterTab';

const RouterTabs = (props) => (
  <ul className="filter-tabs nav nav-tabs">
    {
      props.tabs.map((tab, i) => (
        <RouterTab
          key={i}
          {...tab}
          onClick={props.handleClick}
        />
      ))
    }
  </ul>
);

export default RouterTabs;
