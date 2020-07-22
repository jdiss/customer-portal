import styled from "styled-components";

export const Filters = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  color: #cccc;

  & h2 {
    color: #000;
    font-size: 1.5rem;
  }
`;

export const ListHeader = styled.div``;

export const RowList = styled.div``;

export const SearchField = styled.div`
  display: grid;
  grid-template: 1fr / 50px 1fr;
  border: 1px solid #ccc;
  border-radius: 60px;
  overflow: hidden;
  background-color: #fff;

  & svg {
    grid-column: 1;
    place-self: center;
    font-size: 0.5em;
  }

  & input {
    grid-column: 2;
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    font-size: 1rem;
  }
`;
