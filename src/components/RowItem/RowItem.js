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
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { Item, NameTag } from "./RowItem.base";

const RowItem = () => {
  return (
    <Item col={6}>
      <NameTag>
        <span>JD</span>
      </NameTag>
      <span>#.1235</span>
      <h2>Janaka Dissanayake</h2>
      <span>14 July 1978</span>
      <span>12 Oct 2020</span>
      <span>12 Oct 2020</span>
      <IconButton caption="EDIT" icon={ICON_TYPE.EDIT_USER}></IconButton>
      <IconButton
        caption="DELETE"
        icon={ICON_TYPE.DELETE}
        type={BUTTON_TYPE.SECONDARY}
      ></IconButton>
    </Item>
  );
};

export default RowItem;
