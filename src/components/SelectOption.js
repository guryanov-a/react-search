import React from 'react';

const SelectOption = ({
  name
}) => (
  <option
    value={name}
  >{name}</option>
);

export default SelectOption;