import React from 'react';
import SelectOption from './RouterSelectOption';

const Select = ({
  activeValue,
  onChange,
  options,
  className
}) => (
  <select
    value={activeValue}
    className={`form-control ${className}`}
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
