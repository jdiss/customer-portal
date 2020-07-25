import React from "react";
import { DeleteForm } from "./CustomerForm.base";

const CustomerDeleteForm = ({ customer }) => {
  return (
    <DeleteForm>
      <h2>Delete Customer</h2>
      <div>Are you sure you want to delete this customer</div>
      <div>{`[${customer.id}] ${customer.firstName} ${customer.lastName}`}</div>
    </DeleteForm>
  );
};

export default CustomerDeleteForm;
