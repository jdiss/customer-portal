import styled from "styled-components";

export const FunctionBar = styled.div`
  display: grid;
  grid-template: 1fr / auto 2fr 1fr repeat(3, auto);
  width: 100%;
  color: #cccc;
  align-items: center;

  & h2 {
    color: #000;
    font-size: 1.4em;
    grid-column: 2;
    padding: 0 0.5em;
  }
`;

export const ListHeader = styled.div``;

export const RowList = styled.div``;
