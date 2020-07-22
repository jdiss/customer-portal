import styled from "styled-components";
import { BUTTON_TYPE } from "@erm/utils/constant";

export const Button = styled.button`
  display: grid;
  height: 40px;
  width: 40px;
  place-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;

  & span {
    color: var(--shade-color);
    place-self: center;
    font-size: 1.75rem;
  }

  &:hover span {
    color: var(--primary-color-hover-text);
  }
`;
