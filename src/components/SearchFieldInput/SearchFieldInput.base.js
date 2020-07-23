import styled from "styled-components";

export const SearchField = styled.div`
  display: grid;
  grid-template: 1fr / 50px 1fr;
  border: 1px solid #ccc;
  border-radius: 60px;
  overflow: hidden;
  background-color: #fff;

  & > span {
    grid-column: 1;
    place-self: center;
    display: grid;
    place-items: center;
  }

  & > input {
    grid-column: 2;
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    font-size: 1rem;
  }
`;
