import React from "react";
import { Item, NameTag } from "./RowItem.base";

const RowItem = ({ tag, children, onEdit, onDelete }) => {
  return (
    <Item>
      <NameTag>
        <span>{tag}</span>
      </NameTag>
      {children}
    </Item>
  );
};

export default RowItem;
