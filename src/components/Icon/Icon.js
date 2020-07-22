import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faUsers,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Frame } from "./Icon.base";
import { ICON_TYPE } from "@erm/utils/constant";

const Icon = ({ type }) => {
  const getIcon = () => {
    let icon = faQuestion;
    switch (type) {
      case ICON_TYPE.USER_ADD:
        icon = faUserPlus;
        break;
      case ICON_TYPE.USER_EDIT:
        icon = faUsers;
        break;
      case ICON_TYPE.DELETE:
        icon = faTrashAlt;
        break;
      case ICON_TYPE.USER:
        icon = faUsers;
        break;
      default:
        icon = faQuestion;
        break;
    }
    return icon;
  };
  return (
    <Frame>
      <FontAwesomeIcon icon={getIcon()} />
    </Frame>
  );
};

Icon.propTypes = {};

export default Icon;
