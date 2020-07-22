import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@erm/components";
import { Button } from "./IconButton.base";

const IconButton = ({ caption, icon, type }) => {
  return (
    <Button type={type}>
      <Icon type={icon} />
      <span>{caption}</span>
    </Button>
  );
};

IconButton.propTypes = {};

export default IconButton;
