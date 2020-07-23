import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faUsers,
  faUserEdit,
  faSave,
  faTimesCircle,
  faTimes,
  faThLarge,
  faBars,
  faSearch,
  faUserPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Frame } from "./Icon.base";
import { ICON_TYPE } from "@erm/utils/constant";

const Icon = ({ type, size, color }) => {
  const getIcon = () => {
    let icon = faQuestion;
    switch (type) {
      case ICON_TYPE.ADD_USER:
        icon = faUserPlus;
        break;
      case ICON_TYPE.EDIT_USER:
        icon = faUserEdit;
        break;
      case ICON_TYPE.DELETE:
        icon = faTrashAlt;
        break;
      case ICON_TYPE.USER:
        icon = faUsers;
        break;
      case ICON_TYPE.UPDATE:
        icon = faSave;
        break;
      case ICON_TYPE.CANCEL:
        icon = faTimesCircle;
        break;
      case ICON_TYPE.BOX:
        icon = faThLarge;
        break;
      case ICON_TYPE.LIST:
        icon = faBars;
        break;
      case ICON_TYPE.CLOSE:
        icon = faTimes;
        break;
      case ICON_TYPE.SEARCH:
        icon = faSearch;
        break;
      default:
        icon = faQuestion;
        break;
    }
    return icon;
  };
  return (
    <Frame color={color} size={size}>
      <FontAwesomeIcon icon={getIcon()} />
    </Frame>
  );
};

Icon.propTypes = {};

export default Icon;
