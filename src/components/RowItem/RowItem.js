import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@erm/components";
import { Item } from "./RowItem.base";

const RowItem = () => {
  return (
    <Item col={6}>
      <div>JD</div>
      <span>#.1235</span>
      <span>Janaka Dissanayake</span>
      <span>14 July 1978</span>
      <span>12 Oct 2020</span>
      <span>12 Oct 2020</span>
      <IconButton caption="EDIT"></IconButton>
      <IconButton caption="DELETE"></IconButton>
    </Item>
  );
};

export default RowItem;
