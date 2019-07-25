import React from "react";

import { FieldProps } from "./types";
import { useHandleChange } from './hooks';

export default React.memo(function Select({
  name,
  value,
  onChange
}: FieldProps) {
  const handleChange = useHandleChange(name, onChange);

  return (
    <select name={name} value={value} onChange={handleChange}>
      <option value="">None</option>
      <option value="one">One</option>
      <option value="two">Two</option>
    </select>
  );
});
