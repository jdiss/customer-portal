import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconTextButton } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { CustomerFormWrapper } from "./CustomerForm.base";
import { addCustomer, editCustomer, removeCustomer } from "@erm/state/actions";
import CustomerAddEditFormFields from "./CustomerAddEditFormFields";
import CustomerDeleteForm from "./CustomerDeleteForm";
const CustomerForm = ({ onComplete }) => {
  const [inValid, setInValid] = React.useState(false);
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

  const isValid = (form) => {
    if (form.firstName && form.day && form.month && form.year) {
      return true;
    }
    return false;
  };
  const onCustomerFormSubmit = (e) => {
    e.preventDefault();
    setInValid(false);
    if (form) {
      if (process.isAdd) {
        if (isValid(form)) {
          dispatch(addCustomer(form));
          onComplete();
        } else {
          setInValid(true);
        }
      } else if (process.isEdit) {
        if (isValid(form)) {
          dispatch(editCustomer(process.customer, form));
          onComplete();
        } else {
          setInValid(true);
        }
      } else if (process.isDelete) {
        dispatch(removeCustomer(process.customer));
        onComplete();
      }
    }
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
        {inValid && <div>Required Field Cannot be empty</div>}
      </div>
    </CustomerFormWrapper>
  );
};

export default CustomerForm;
