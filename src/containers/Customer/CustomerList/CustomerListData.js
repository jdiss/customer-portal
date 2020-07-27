import React from "react";
import { useSelector } from "react-redux";
import { setNameTag } from "@erm/utils/helpers";
import { RowItem, IconTextButton } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { EmptyList } from "./CustomerList.base";
const CustomerListData = ({ query = "", onEdit, onDelete }) => {
  let customers = useSelector((state) => {
    if (query) {
      return state.customers.filter((customer) => {
        return (
          customer.firstName.toLowerCase().includes(query) ||
          customer.lastName.toLowerCase().includes(query)
        );
      });
    }
    return state.customers;
  });

  if (customers.length === 0) {
    return (
      <EmptyList>
        No Customers found please refine your search or add new customer
      </EmptyList>
    );
  }

  return customers.map((customer, index) => (
    <RowItem
      tag={setNameTag(`${customer.firstName} ${customer.lastName}`)}
      key={index}
    >
      <span>#.{customer.id}</span>
      <h2>{`${customer.firstName} ${customer.lastName}`}</h2>
      <span>{customer.dob}</span>
      <span>{customer.created}</span>
      <span>{customer.edited}</span>
      <IconTextButton
        caption="EDIT"
        icon={ICON_TYPE.EDIT_USER}
        onClick={() => onEdit(customer)}
      ></IconTextButton>
      <IconTextButton
        caption="DELETE"
        icon={ICON_TYPE.DELETE}
        type={BUTTON_TYPE.SECONDARY}
        onClick={() => onDelete(customer)}
      ></IconTextButton>
    </RowItem>
  ));
};

export default CustomerListData;
