import React from "react";

import Form, { FormValues } from "./Form";

const initialValues = {
  field1: {
    one: "",
    two: "",
    three: "a"
  },
  field2: {
    one: "",
    two: "",
    three: "b"
  },
  field3: {
    one: "",
    two: "",
    three: "c"
  }
};

export default React.memo(function RepeatableFieldForm() {
  const [values, setValues] = React.useState();

  const reinitalize = React.useCallback(() => {
    setValues(initialValues);
  }, []);

  const handleSubmit = React.useCallback((values: FormValues) => {
    console.log("handleSubmit:", values);
  }, []);

  const handleChange = React.useCallback(nextValues => {
    setValues(nextValues);
  }, []);

  return (
    <div>
      <button onClick={reinitalize}>Reinitialize with values</button>
      <Form
        initialValues={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
});
