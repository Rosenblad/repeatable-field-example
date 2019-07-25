import React from "react";

import Field, { FieldValue, OnChange } from "../Field";

import AddFieldButton from "./AddFieldButton";
import { FormValues } from "./types";

export interface IRenderFormProps {
  fields: [string, FieldValue][];
  onSubmit: (key: string) => void;
  onChange: OnChange;
  onDelete: (key: string) => void;
  onAdd: () => void;
  onSelect: (key: string) => void;
  selectedField: string;
  initialValues: FormValues;
}

export default React.memo(function RenderForm({
  fields,
  onSubmit,
  onDelete,
  onChange,
  onAdd,
  onSelect,
  selectedField,
  initialValues,
}: IRenderFormProps) {
  return (
    <div>
      {fields.map(([key, value]) => (
        <Field
          key={key}
          name={key}
          value={value}
          onSelect={onSelect}
          onChange={onChange}
          onClickSave={onSubmit}
          onClickDelete={onDelete}
          selected={selectedField === key}
          initialValue={initialValues[key]}
        />
      ))}
      <AddFieldButton onClick={onAdd} />
    </div>
  );
});
