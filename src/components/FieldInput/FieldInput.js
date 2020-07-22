import React from "react";
import { Field } from "./FieldInput.base";

const FieldInput = ({ label }) => {
  const [value, setValue] = React.useState("");
  return (
    <Field>
      <input
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        type="text"
        name="lastName"
        id="lastName"
        className={value ? "hasInput" : ""}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label for="lastName">Last name</label>
    </Field>
  );
};

export default FieldInput;
