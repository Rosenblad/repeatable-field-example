import React from "react";

import { FieldValue, OnChange } from "./types";
import TextField from "./TextField";
import Select from "./Select";
import { ChangeSet } from "../Form";
import { hasChanged } from '../helpers';

export interface IFieldProps {
  name: string;
  value: FieldValue;
  onChange: OnChange;
  onClickSave: (key: string) => void;
  onClickDelete: (key: string) => void;
  onSelect: (key: string) => void;
  selected: boolean;
  initialValue: FieldValue;
}

export default React.memo(function Field({
  name: key,
  value,
  onChange,
  onClickSave,
  onClickDelete,
  onSelect,
  selected,
  initialValue,
}: IFieldProps) {
  const handleChange = React.useCallback(
    (changeSet: ChangeSet) => {
      onChange(key, changeSet);
    },
    [key, onChange]
  );

  const handleDelete = React.useCallback(() => {
    onClickDelete(key);
  }, [onClickDelete, key]);

  const handleSelect = React.useCallback(() => {
    onSelect(key);
  }, [onSelect, key]);

  const handleSave = React.useCallback(() => {
    onClickSave(key);
  }, [onClickSave, key]);

  const changed = hasChanged(value, initialValue);
  const style = changed ? { background: 'yellow' } : undefined;

  return (
    <div style={style}>
      <input
        type="radio"
        name="selected"
        checked={selected}
        onChange={handleSelect}
      />
      <Select name="one" value={value.one} onChange={handleChange} />
      <Select name="two" value={value.two} onChange={handleChange} />
      <TextField name="three" value={value.three} onChange={handleChange} />
      <button type="button" onClick={handleSave} disabled={!changed}>
        Save
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
});
