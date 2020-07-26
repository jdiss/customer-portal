import styled from "styled-components";

export const CustomerFormWrapper = styled.form`
  display: grid;
  grid-template: 1fr repeat(3, auto) 1.5fr / 1fr;

  & > h2 {
    grid-row: 1;
    font-size: 1.2em;
    padding: 0.75em 0;
  }

  & > div:nth-of-type(1) {
    grid-row: 2;
  }
  & > div:nth-of-type(2) {
    grid-row: 3;
  }
  & > div:nth-of-type(3) {
    grid-row: 4;
    display: grid;
    grid-template: 1fr / 80px repeat(3, auto);
    grid-gap: 1em;
    place-items: center;
    margin-bottom: 1em;

    & > label {
      color: var(--dark-shade-color);
    }
  }

  & > .functions {
    grid-row: 5;
    display: grid;
    grid-template: 1fr / 1fr repeat(2, auto);
    grid-gap: 1em;
    place-items: center;
    border-top: solid 1px var(--border-color);
    padding-top: 10px;

    & > button:nth-of-type(1) {
      grid-column: 2;
    }
    & > button:nth-of-type(2) {
      grid-column: 3;
    }

    & div:last-child {
      grid-column: 1/-1;
      color: var(--invalid-color);
      font-size: 1em;
    }
  }
`;

export const DeleteForm = styled.div`
  display: grid;
  grid-template: 1fr 1fr 0.5fr / 1fr;

  & > h2 {
    grid-row: 1;
    font-size: 1.2em;
    padding: 0.75em 0;
  }
  & > div:nth-of-type(1) {
    grid-row: 2;
  }

  & > div:nth-of-type(2) {
    grid-row: 3;
    font-size: 1em;
    color: var(--high-color);
  }
`;
