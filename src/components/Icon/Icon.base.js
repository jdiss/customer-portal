import styled from "styled-components";
import { ICON_SIZE, ICON_COLOR } from "@erm/utils/constant";

const getSize = (sizeName) => {
  let size = "0.9em";
  switch (sizeName) {
    case ICON_SIZE.LARGE:
      size = "1em";
      break;
    case ICON_SIZE.X_LARGE:
      size = "1.95em";
      break;
    default:
      size = "0.9em";
      break;
  }
  return size;
};

export const Frame = styled.span`
  color: var(
    ${({ color = ICON_COLOR.LIGHT }) =>
      color == ICON_COLOR.LIGHT ? "--text-light-color" : "--shade-color"}
  );
  font-size: ${({ size = ICON_SIZE.REGULAR }) => {
    return getSize(size);
  }};
`;
