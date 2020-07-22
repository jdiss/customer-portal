import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RowItem } from "@erm/components";
import { Filters, SearchField, Button, Item } from "./CustomerList.base";

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
        <Button>
          <FontAwesomeIcon icon={faUserPlus} />
          <span>ADD NEW CUSTOMER</span>
        </Button>
      </Filters>
      <RowItem />
    </div>
  );
};

export default CustomerList;
