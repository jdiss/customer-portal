import styled from "styled-components";
import { ItemFrame } from "@erm/elements";

export const FunctionBar = styled.div`
  display: grid;
  grid-template: 1fr / auto 2fr 1fr repeat(3, auto) 0.05fr;
  width: 100%;
  color: #cccc;
  align-items: center;
  grid-column-gap: 1.5em;

  & h2 {
    color: #000;
    font-size: 1.4em;
    grid-column: 2;
    padding: 0 0.5em;
  }
`;

export const ListHeader = styled(ItemFrame)`
  margin: 2em 0 0.5em 0;

  & > span {
    color: var(--dark-shade-color);
  }

  & > span:nth-of-type(1) {
    grid-area: id;
  }
  & > span:nth-of-type(2) {
    grid-area: name;
  }
  & > span:nth-of-type(3) {
    grid-area: dob;
  }
  & > span:nth-of-type(4) {
    grid-area: create;
  }
  & > span:nth-of-type(5) {
    grid-area: update;
  }
`;

export const EmptyList = styled.div`
  text-align: center;
  margin: 10% auto;
  color: var(--high-color);
  font-size: 1.25em;
`;
