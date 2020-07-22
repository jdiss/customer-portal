import styled from "styled-components";

export const Button = styled.button`
  display: grid;
  height: 32px;
  width: max-content;
  grid-template: auto / 16px auto auto 16px;
  border: 1px solid #ccc;
  border-radius: 60px;
  place-items: center;
  cursor: pointer;
  background-color: var(--primary-color);

  & span:nth-of-type(1) {
    grid-column: 2;
    place-self: center;
    font-size: 0.9em;
    color: #fff;
  }
  & span:nth-of-type(2) {
    grid-column: 3;
    display: inline-block;
    border: 0;
    padding: 0.5rem;
    font-size: 0.9em;
    color: #fff;
  }

  &:hover {
    background-color: #c7482d;
  }
`;
