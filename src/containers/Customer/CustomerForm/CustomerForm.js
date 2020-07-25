import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconTextButton } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { CustomerFormWrapper } from "./CustomerForm.base";
import { addCustomer, editCustomer, removeCustomer } from "@erm/state/actions";
import CustomerAddEditFormFields from "./CustomerAddEditFormFields";
import CustomerDeleteForm from "./CustomerDeleteForm";
const CustomerForm = ({ onComplete }) => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
  });
  const dispatch = useDispatch();
  const process = useSelector((state) => state.process);

  React.useEffect(() => {
    if (process.isEdit) {
      const { customer } = process;
      const dobList = customer.dob.split("/");
      setForm({
        firstName: customer.firstName,
        lastName: customer.lastName,
        day: dobList[0],
        month: dobList[1],
        year: dobList[2],
      });
    }
  }, [process]);

  const onCustomerFormSubmit = (e) => {
    e.preventDefault();
    if (process.isAdd) {
      dispatch(addCustomer(form));
    } else if (process.isEdit) {
      dispatch(editCustomer(process.customer, form));
    } else if (process.isDelete) {
      dispatch(removeCustomer(process.customer));
    }

    onComplete();
  };

  return (
    <CustomerFormWrapper onSubmit={onCustomerFormSubmit}>
      {process.isAdd && (
        <CustomerAddEditFormFields title="Add" form={form} setForm={setForm} />
      )}
      {process.isEdit && (
        <CustomerAddEditFormFields title="Edit" form={form} setForm={setForm} />
      )}
      {process.isDelete && <CustomerDeleteForm customer={process.customer} />}
      <div className="functions">
        <IconTextButton
          caption={process.isDelete ? "YES" : "SAVE"}
          icon={process.isDelete ? ICON_TYPE.CHECK : ICON_TYPE.SAVE}
        ></IconTextButton>
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
