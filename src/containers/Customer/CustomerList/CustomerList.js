import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RowItem, IconTextButton } from "@erm/components";
import { Filters, SearchField } from "./CustomerList.base";
import { ICON_TYPE } from "@erm/utils/constant";

const CustomerList = () => {
  return (
    <div>
      <Filters>
        <FontAwesomeIcon icon={faUsers} />
        <h2>Customer List</h2>
        <FontAwesomeIcon icon={faThLarge} />
        <FontAwesomeIcon icon={faBars} />
        <SearchField>
          <FontAwesomeIcon icon={faSearch} />
          <input
            class="searchBox"
            type="search"
            name="search"
            placeholder="Search..."
          />
        </SearchField>
      </Filters>
      <IconTextButton
        caption="ADD NEW CUSTOMER"
        icon={ICON_TYPE.ADD_USER}
      ></IconTextButton>
      <RowItem />
    </div>
  );
};

export default CustomerList;
