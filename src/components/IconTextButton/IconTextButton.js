import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@erm/components";
import { Button } from "./IconTextButton.base";

const IconTextButton = ({ caption, icon, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      <Icon type={icon} />
      <span>{caption}</span>
    </Button>
  );
};

IconTextButton.propTypes = {};

export default IconTextButton;
