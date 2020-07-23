import styled from "styled-components";

const ItemFrame = styled.div`
  display: grid;
  grid-template-columns: 75px 0.75fr 2fr repeat(3, 1fr) 100px 120px 0.05fr;
  grid-template-rows: 1fr;
  grid-template-areas: "tag id name dob create update edit delete";
  grid-gap: 5px;
  padding: 0.5em;
  align-items: center;
`;

export default ItemFrame;
