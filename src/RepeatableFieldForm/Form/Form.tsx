import React from "react";

import { ActionTypes, ChangeSet, FormValues } from "./types";
import RenderForm from "./RenderForm";
import reducer, { reinitialize } from "./reducers";
import { FieldValue } from "../Field";
import { useEventCallback } from "./hooks";

export interface IFormProps {
  initialValues: { [key: string]: FieldValue };
  onSubmit?: (values: FormValues) => void;
  onChange?: (values: FormValues) => void;
}

const initialState = {};

export default function Form({
  initialValues = initialState,
  onSubmit,
  onChange,
}: IFormProps) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialValues,
    reinitialize
  );

  React.useLayoutEffect(() => {
    if (Object.is(initialValues, initialState)) return;

    dispatch({ type: ActionTypes.Reinitialize, payload: initialValues });
  }, [initialValues]);

  React.useLayoutEffect(() => {
    if (onChange) {
      onChange(state.values);
    }
  }, [state.values, onChange]);

  const handleAdd = React.useCallback(() => {
    dispatch({
      type: ActionTypes.Add,
      payload: { key: String(Math.random()) }
    });
  }, [dispatch]);

  const handleSubmit = useEventCallback((key: string) => {
    dispatch({
      type: ActionTypes.Submit,
      payload: { key }
    });

    if (onSubmit) {
      onSubmit(state.values);
    }
  }, [onSubmit]);

  const handleDelete = React.useCallback(
    (name: string) => {
      dispatch({ type: ActionTypes.Delete, payload: { key: name } });
    },
    [dispatch]
  );

  const handleChange = React.useCallback(
    (name: string, changeSet: ChangeSet) => {
      dispatch({ type: ActionTypes.Change, payload: { key: name, changeSet } });
    },
    [dispatch]
  );

  const handleSelect = React.useCallback((name: string) => {
    dispatch({ type: ActionTypes.Select, payload: { key: name } });
  }, []);

  return (
    <RenderForm
      selectedField={state.selectedField}
      initialValues={state.initialValues}
      fields={Object.entries(state.values)}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onChange={handleChange}
      onSelect={handleSelect}
      onAdd={handleAdd}
    />
  );
}
