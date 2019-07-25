import React from "react";

import { OnChangeEvent, FieldNames } from "./types";
import { ChangeSet } from "../Form";

export function useHandleChange(
  name: FieldNames,
  onChange: (changeSet: ChangeSet) => void
) {
  return React.useCallback(
    (event: OnChangeEvent) => {
      onChange({ key: name, value: event.target.value });
    },
    [onChange, name]
  );
}
