import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { ICON_TYPE, BUTTON_TYPE, ACTIONS } from "@erm/utils/constant";

const CustomerList = () => {
  const [model, setModel] = React.useState("ADD");
  const { isShowing, toggle } = useModal();
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const onAddCustomerClick = () => {
    dispatch({ type: ACTIONS.ADD });
    toggle();
  };
  const onEditCustomerClick = (customer) => {
    dispatch({ type: ACTIONS.EDIT, payload: customer });
    toggle();
  };
  const onDeleteCustomerClick = (customer) => {
    dispatch({ type: ACTIONS.DELETE, payload: customer });

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
      <Modal isShowing={isShowing}>
        <CustomerForm onComplete={toggle} />
      </Modal>
    </div>
  );
};

export default CustomerList;
