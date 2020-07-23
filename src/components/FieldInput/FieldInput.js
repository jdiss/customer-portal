import React from "react";
import { Field } from "./FieldInput.base";

const FieldInput = ({ label, input, onValueChange }) => {
  const [value, setValue] = React.useState(input);
  return (
    <Field>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type="text"
        name="lastName"
        id="lastName"
        className={value ? "hasInput" : ""}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor="lastName">{label}</label>
    </Field>
  );
};

export default FieldInput;
