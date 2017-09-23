import React from 'react';
import Tab from './Tab';

const Tabs = ({
  tabs,
  onClick,
}) => (
  <ul className="filter-tabs nav nav-tabs">
    {
      tabs.map((tab, i) => (
        <Tab
          key={i}
          {...tab}
          onClick={onClick}
        />
      ))
    }
  </ul>
);

export default Tabs;