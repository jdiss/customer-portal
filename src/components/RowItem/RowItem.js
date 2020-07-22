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
import { ICON_TYPE } from "@erm/utils/constant";
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
      <IconButton caption="EDIT" icon={ICON_TYPE.USER}></IconButton>
      <IconButton caption="DELETE" icon={ICON_TYPE.DELETE}></IconButton>
    </Item>
  );
};

export default RowItem;
