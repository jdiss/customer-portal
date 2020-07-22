import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./IconButton.base";

const IconButton = ({ caption, icon }) => {
  return (
    <Button>
      <FontAwesomeIcon icon={faUserPlus} />
      <span>{caption}</span>
    </Button>
  );
};

IconButton.propTypes = {};

export default IconButton;
