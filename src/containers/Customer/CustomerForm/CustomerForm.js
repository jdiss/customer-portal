import React from "react";
import { IconTextButton, FieldInput } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { CustomerFormWrapper } from "./CustomerForm.base";
const CustomerForm = () => {
  const onSaveClick = () => {};
  const onCancelClick = () => {};
  return (
    <CustomerFormWrapper>
      <h2>Add New Customer</h2>
      <FieldInput label="First name" />
      <FieldInput label="Last name" />
      <div>
        <label>Born in</label>
        <FieldInput label="DD" />
        <FieldInput label="MM" />
        <FieldInput label="YYYY" />
      </div>
      <div>
        <IconTextButton
          caption="SAVE"
          icon={ICON_TYPE.SAVE}
          onClick={onSaveClick}
        ></IconTextButton>
        <IconTextButton
          caption="CANCEL"
          icon={ICON_TYPE.CANCEL}
          type={BUTTON_TYPE.SECONDARY}
          onClick={onCancelClick}
        ></IconTextButton>
      </div>
    </CustomerFormWrapper>
  );
};

export default CustomerForm;
