import styled from "styled-components";

const RowItemBase = styled.div`
  display: grid;
  grid-template-columns: auto 0.75fr 2fr repeat(3, 1fr) auto auto 0.05fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  padding: 0.5em;
  place-items: center;
`;

export default RowItemBase;
