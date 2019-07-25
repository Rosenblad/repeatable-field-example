import { FieldValue } from '../Field';

export interface FormValues {
  [key: string]: FieldValue;
}

export type FormState = {
  selectedField: string;
  initialValues: FormValues;
  values: FormValues;
}

export type ChangeSet = { key: keyof FieldValue; value: string };

export enum ActionTypes {
  Add = 'add',
  Change = 'change',
  Delete = 'delete',
  Submit = 'submit',
  Reinitialize = 'reinitialize',
  Select = 'select',
};

export interface DefaultPayload {
  key: string;
}

export interface ChangePayload extends DefaultPayload {
  changeSet: ChangeSet;
}

export type Actions =
  | { type: ActionTypes.Add, payload: DefaultPayload }
  | { type: ActionTypes.Change, payload: ChangePayload }
  | { type: ActionTypes.Delete, payload: DefaultPayload }
  | { type: ActionTypes.Submit, payload: DefaultPayload }
  | { type: ActionTypes.Reinitialize, payload: FormValues }
  | { type: ActionTypes.Select, payload: DefaultPayload };