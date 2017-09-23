import React from 'react';
import SelectOption from './SelectOption';

const Select = ({
  activeValue,
  onChange,
  options,
}) => (
  <select
    value={activeValue}
    className="filter-select form-control"
    onChange={onChange}
  >
    {
      options.map((option, i) => {
        return <SelectOption
          key={i}
          name={option.name}
        />;
      })
    }
  </select>
);

export default Select;