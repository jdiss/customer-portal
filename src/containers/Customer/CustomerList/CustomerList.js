import React from "react";
import {
  RowItem,
  IconTextButton,
  IconButton,
  SearchFieldInput,
} from "@erm/components";
import { FunctionBar } from "./CustomerList.base";
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
      <RowItem />
    </div>
  );
};

export default CustomerList;
