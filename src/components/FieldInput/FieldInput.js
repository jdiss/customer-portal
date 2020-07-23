import React from "react";
import { Field } from "./FieldInput.base";

const FieldInput = ({ label, name, value = "", onValueChange }) => {
  return (
    <Field>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type="text"
        name={name}
        id={name}
        className={value ? "hasInput" : ""}
        placeholder=" "
        value={value}
        onChange={onValueChange}
      />
      <label htmlFor="lastName">{label}</label>
    </Field>
  );
};

export default FieldInput;
