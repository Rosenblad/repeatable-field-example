import React from "react";

import { FieldProps } from "./types";
import { useHandleChange } from "./hooks";

export default React.memo(function TextField({
  name,
  value,
  onChange
}: FieldProps) {
  const handleChange = useHandleChange(name, onChange);

  return (
    <input type="text" name={name} value={value} onChange={handleChange} />
  );
});
