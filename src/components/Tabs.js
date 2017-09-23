import React from 'react';
import Tab from './Tab';

const Tabs = ({
  tabs,
  onTabClick,
}) => (
  <ul className="filter-tabs nav nav-tabs">
    {
      tabs.map((tab, i) => (
        <Tab
          key={i}
          {...tab}
          onClick={onTabClick}
        />
      ))
    }
  </ul>
);

export default Tabs;