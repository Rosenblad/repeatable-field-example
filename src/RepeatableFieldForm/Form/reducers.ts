import {
  FormState,
  ActionTypes,
  ChangePayload,
  Actions,
  FormValues
} from "./types";
import { omit } from "./helpers";

function changeField(
  state: FormState,
  { key, changeSet }: ChangePayload
): FormState {
  const nextValue = {
    ...state.values[key],
    [changeSet.key]: changeSet.value,
  };

  return {
    ...state,
    values: {
      ...state.values,
      [key]: nextValue,
    },
  };
}

function addField(state: FormState, key: string): FormState {
  const initialValue = {
    one: "",
    two: "",
    three: ""
  };

  return {
    ...state,
    values: {
      ...state.values,
      [key]: initialValue,
    },
    initialValues: {
      ...state.initialValues,
      [key]: initialValue,
    },
  };
}

function selectField(state: FormState, key: string): FormState {
  return {
    ...state,
    selectedField: key
  };
}

function deleteField(state: FormState, key: string): FormState {
  return {
    ...state,
    values: {
      ...omit(state.values, [key]),
    }
  }
}

export function reinitialize(values: FormValues): FormState {
  return {
    selectedField: "",
    initialValues: values,
    values,
  };
}

export default function reducer(state: FormState, action: Actions): FormState {
  switch (action.type) {
    case ActionTypes.Add:
      return addField(state, action.payload.key);
    case ActionTypes.Change:
      return changeField(state, action.payload);
    case ActionTypes.Delete:
      return deleteField(state, action.payload.key);
    case ActionTypes.Select:
      return selectField(state, action.payload.key);
    case ActionTypes.Reinitialize:
      return reinitialize(action.payload);
    case ActionTypes.Submit:
      return state;
    default:
      return state;
  }
}
