import styled from "styled-components";

export const Item = styled.div`
  display: grid;
  grid-gap: 5px;
  margin: 10px 0;
  width: 100%;
  border-radius: 60px;
  box-shadow: -10px 10px 20px 0 rgba(30, 30, 30, 0.05);
  background-color: #fff;
  display: grid;
  grid-template-columns: 10% 2fr repeat(6, 1fr);
  grid-template-rows: 1fr;
  padding: 0.5em;
  margin: 1.5em;
  align-items: center;

  & div {
    width: 72px;
    height: 72px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: grid;
    place-items: center;
    & span {
      display: block;
      text-align: center;
      font-family: "Chelsea Market";
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
    }
  }

  & span {
    display: block;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666565;
  }

  & .span2 {
    grid-column: span 2;
  }

  & .right {
    place-self: end;
    text-align: right;
  }
`;
