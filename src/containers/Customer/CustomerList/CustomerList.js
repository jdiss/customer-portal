import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  RowItem,
  IconTextButton,
  IconButton,
  SearchFieldInput,
} from "@erm/components";
import { Filters } from "./CustomerList.base";
import { ICON_TYPE } from "@erm/utils/constant";

const CustomerList = () => {
  return (
    <div>
      <Filters>
        <IconButton icon={ICON_TYPE.USER} />
        <h2>Customer List</h2>
        <IconButton icon={ICON_TYPE.BOX} />
        <IconButton icon={ICON_TYPE.LIST} />
        <SearchFieldInput />

        <IconTextButton
          caption="ADD NEW CUSTOMER"
          icon={ICON_TYPE.ADD_USER}
        ></IconTextButton>
      </Filters>
      <RowItem />
    </div>
  );
};

export default CustomerList;
