import React from "react";
import {
  RowItem,
  IconTextButton,
  IconButton,
  SearchFieldInput,
} from "@erm/components";
import { FunctionBar, ListHeader } from "./CustomerList.base";
import { ICON_TYPE } from "@erm/utils/constant";

const CustomerList = () => {
  return (
    <div>
      <FunctionBar>
        <IconButton icon={ICON_TYPE.USER} />
        <h2>Customer List</h2>
        <SearchFieldInput />
        <IconButton icon={ICON_TYPE.BOX} />
        <IconButton icon={ICON_TYPE.LIST} />
        <IconTextButton
          caption="ADD NEW CUSTOMER"
          icon={ICON_TYPE.ADD_USER}
        ></IconTextButton>
      </FunctionBar>
      <ListHeader>
        <span>#.ID</span>
        <span>Customer Name</span>
        <span>Born in</span>
        <span>Created on</span>
        <span>Last edited on</span>
      </ListHeader>
      {[1, 2, 3, 4, 5].map((customer, index) => (
        <RowItem tag={"JD"}>
          <span>#.1235</span>
          <h2>Janaka Dissanayake</h2>
          <span>14 July 1978</span>
          <span>12 Oct 2020</span>
          <span>12 Oct 2020</span>
        </RowItem>
      ))}
    </div>
  );
};

export default CustomerList;
