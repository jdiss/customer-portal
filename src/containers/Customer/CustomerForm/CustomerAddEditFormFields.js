import React from "react";
import { FieldInput } from "@erm/components";

const CustomerAddEditFormFields = ({ title, form, setForm }) => {
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>{`${title} New Customer`}</h2>
      <FieldInput
        label="First name"
        name="firstName"
        value={form.firstName}
        onValueChange={updateField}
      />
      <FieldInput
        label="Last name"
        name="lastName"
        value={form.lastName}
        onValueChange={updateField}
      />
      <div>
        <label>Born in</label>
        <FieldInput
          label="DD"
          name="day"
          value={form.day}
          onValueChange={updateField}
        />
        <FieldInput
          label="MM"
          name="month"
          value={form.month}
          onValueChange={updateField}
        />
        <FieldInput
          label="YYYY"
          name="year"
          value={form.year}
          onValueChange={updateField}
        />
      </div>
    </>
  );
};

export default CustomerAddEditFormFields;
