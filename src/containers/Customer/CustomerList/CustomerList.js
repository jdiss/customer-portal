import React from "react";
import { useDispatch } from "react-redux";
import {
  IconTextButton,
  IconButton,
  SearchFieldInput,
  Modal,
} from "@erm/components";
import { useModal } from "@erm/hooks";
import { FunctionBar, ListHeader } from "./CustomerList.base";
import { CustomerForm } from "@erm/containers";
import {
  startCustomerAdd,
  startCustomerEdit,
  startCustomerDelete,
} from "@erm/state/actions";
import { ICON_TYPE } from "@erm/utils/constant";
import CustomerListData from "./CustomerListData";

const CustomerList = () => {
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState("");

  const onAddCustomerClick = () => {
    dispatch(startCustomerAdd());
    toggle();
  };
  const onEditCustomerClick = (customer) => {
    dispatch(startCustomerEdit(customer));
    toggle();
  };
  const onDeleteCustomerClick = (customer) => {
    dispatch(startCustomerDelete(customer));
    toggle();
  };

  const onSearchChange = (search) => {
    setQuery(search);
  };

  return (
    <div>
      <FunctionBar>
        <IconButton icon={ICON_TYPE.USER} />
        <h2>Customer List</h2>
        <SearchFieldInput onSearchChange={onSearchChange} />
        <IconButton icon={ICON_TYPE.LIST} active={true} />
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
      <CustomerListData
        query={query}
        onEdit={onEditCustomerClick}
        onDelete={onDeleteCustomerClick}
      />
      <Modal isShowing={isShowing}>
        <CustomerForm onComplete={toggle} />
      </Modal>
    </div>
  );
};

export default CustomerList;
