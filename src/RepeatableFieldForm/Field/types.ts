import { ChangeSet } from "../Form";

export type FieldValue = {
  one: string;
  two: string;
  three: string;
};

export type FieldNames = keyof FieldValue;

export type OnChangeEvent = React.ChangeEvent<{ name: string; value: string }>;

export type OnChange = (name: string, changeSet: ChangeSet) => void;

export type Field = {
  readonly name: string;
  readonly value: string;
  readonly dirty: boolean;
  readonly initialValue: string;
};

export type FieldProps = {
  name: FieldNames;
  value: string;
  onChange: (changeSet: ChangeSet) => void;
};
