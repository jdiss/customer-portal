import React from "react";
import {
  RowItem,
  IconTextButton,
  IconButton,
  SearchFieldInput,
  Modal,
} from "@erm/components";
import { useModal } from "@erm/hooks";
import { FunctionBar, ListHeader } from "./CustomerList.base";
import { CustomerForm } from "@erm/containers";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { getCustomers } from "@erm/services/customerService";

const CustomerList = () => {
  const [model, setModel] = React.useState("ADD");
  const [customers, setCustomers] = React.useState([]);
  const { isShowing, toggle } = useModal();

  React.useEffect(() => {
    setCustomers(getCustomers());
  }, []);

  const onAddCustomerClick = () => {
    setModel({ action: "ADD", customer: null });
    toggle();
  };
  const onEditCustomerClick = (customer) => {
    setModel({ action: "EDIT", customer: customer });
    toggle();
  };
  const onDeleteCustomerClick = (customer) => {
    setModel({ action: "DELETE", customer: customer });
    toggle();
  };
  return (
    <div>
      <FunctionBar>
        <IconButton icon={ICON_TYPE.USER} />
        <h2>Customer List</h2>
        <SearchFieldInput />
        <IconButton icon={ICON_TYPE.LIST} />
        <IconButton icon={ICON_TYPE.BOX} />
        <IconTextButton
          caption="ADD NEW CUSTOMER"
          icon={ICON_TYPE.ADD_USER}
          onClick={onAddCustomerClick}
        ></IconTextButton>
      </FunctionBar>
      <ListHeader>
        <span>#.ID</span>
        <span>Customer Name</span>
        <span>Born in</span>
        <span>Created on</span>
        <span>Last edited on</span>
      </ListHeader>
      {customers.map((customer, index) => (
        <RowItem tag={"JD"} key={index}>
          <span>#.{customer.id}</span>
          <h2>{`${customer.firstName} ${customer.lastName}`}</h2>
          <span>{customer.dob}</span>
          <span>{customer.created}</span>
          <span>{customer.edited}</span>
          <IconTextButton
            caption="EDIT"
            icon={ICON_TYPE.EDIT_USER}
            onClick={() => onEditCustomerClick(customer)}
          ></IconTextButton>
          <IconTextButton
            caption="DELETE"
            icon={ICON_TYPE.DELETE}
            type={BUTTON_TYPE.SECONDARY}
            onClick={() => onDeleteCustomerClick(customer)}
          ></IconTextButton>
        </RowItem>
      ))}
      <Modal isShowing={isShowing} hide={toggle}>
        {model.action === "ADD" && <CustomerForm />}
        {model.action === "EDIT" && <div>{model.customer.id}</div>}
        {model.action === "DELETE" && <div>{model.customer.id}</div>}
      </Modal>
    </div>
  );
};

export default CustomerList;
