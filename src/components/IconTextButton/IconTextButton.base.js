import styled from "styled-components";
import { BUTTON_TYPE } from "@erm/utils/constant";

export const Button = styled.button`
  display: grid;
  height: 32px;
  width: max-content;
  grid-template: auto / 16px auto auto 16px;
  border: 1px solid #ccc;
  border-radius: 60px;
  place-items: center;
  cursor: pointer;
  background-color: var(
    ${({ type = BUTTON_TYPE.PRIMARY }) =>
      type === BUTTON_TYPE.PRIMARY ? "--primary-color" : "--secondary-color"}
  );

  & span {
    color: #fff;
  }

  &:hover span {
    color: var(
      ${({ type = BUTTON_TYPE.PRIMARY }) =>
        type === BUTTON_TYPE.PRIMARY
          ? "--primary-color-hover-text"
          : "--secondary-color-hover-text"}
    );
  }

  & > span:nth-of-type(1) {
    grid-column: 2;
    place-self: center;
    font-size: 0.9em;
  }
  & > span:nth-of-type(2) {
    grid-column: 3;
    display: inline-block;
    border: 0;
    padding: 0.5rem;
    font-size: 0.9em;
  }

  &:hover {
    background-color: var(
      ${({ type = BUTTON_TYPE.PRIMARY }) =>
        type === BUTTON_TYPE.PRIMARY
          ? "--primary-color-hover"
          : "--secondary-color-hover"}
    );
  }
`;
