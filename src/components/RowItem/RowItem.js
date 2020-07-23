import React from "react";
import { IconTextButton } from "@erm/components";
import { ICON_TYPE, BUTTON_TYPE } from "@erm/utils/constant";
import { Item, NameTag } from "./RowItem.base";

const RowItem = ({ tag, children, onEdit, onDelete }) => {
  return (
    <Item>
      <NameTag>
        <span>{tag}</span>
      </NameTag>
      {children}
      <IconTextButton
        caption="EDIT"
        icon={ICON_TYPE.EDIT_USER}
      ></IconTextButton>
      <IconTextButton
        caption="DELETE"
        icon={ICON_TYPE.DELETE}
        type={BUTTON_TYPE.SECONDARY}
      ></IconTextButton>
    </Item>
  );
};

export default RowItem;
