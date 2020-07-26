import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@erm/components";
import { ICON_SIZE, ICON_COLOR } from "@erm/utils/constant";
import { Button } from "./IconButton.base";

const IconButton = ({ icon, active = false }) => {
  return (
    <Button active={active}>
      <Icon type={icon} size={ICON_SIZE.X_LARGE} color={ICON_COLOR.SHADE} />
    </Button>
  );
};

IconButton.propTypes = {};

export default IconButton;
