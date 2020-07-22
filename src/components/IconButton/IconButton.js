import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@erm/components";
import { Button } from "./IconButton.base";

const IconButton = ({ icon }) => {
  return (
    <Button type={type}>
      <Icon type={icon} />
    </Button>
  );
};

IconButton.propTypes = {};

export default IconButton;
