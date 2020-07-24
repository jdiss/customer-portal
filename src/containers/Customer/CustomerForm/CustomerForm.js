import React from "react";
import { useDispatch } from "react-redux";
import { IconTextButton, FieldInput } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE, ACTIONS } from "@erm/utils/constant";
import { CustomerFormWrapper } from "./CustomerForm.base";
import { addCustomer } from "@erm/services/customerService";
const CustomerForm = ({ onComplete }) => {
  const [form, setState] = React.useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
  });
  const dispatch = useDispatch();

  const onCustomerFormSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.ADD_CUSTOMER,
      payload: addCustomer(form),
    });
    onComplete();
  };

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CustomerFormWrapper onSubmit={onCustomerFormSubmit}>
      <h2>Add New Customer</h2>
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
      <div>
        <IconTextButton caption="SAVE" icon={ICON_TYPE.SAVE}></IconTextButton>
        <IconTextButton
          caption="CANCEL"
          name="CANCEL"
          icon={ICON_TYPE.CANCEL}
          type={BUTTON_TYPE.SECONDARY}
          onClick={onComplete}
        ></IconTextButton>
      </div>
    </CustomerFormWrapper>
  );
};

export default CustomerForm;
