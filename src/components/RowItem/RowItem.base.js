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
  grid-template-columns: auto 0.75fr 2fr repeat(3, 1fr) auto auto 0.05fr;
  grid-template-rows: 1fr;
  padding: 0.5em;
  margin: 1.5em;
  place-items: center;

  & h2 {
    grid-column: 3;
    display: block;
    justify-self: start;
    font-size: 1.05em;
    color: var(--primary-color);
  }

  & span {
    display: block;
    font-size: 1em;
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

export const NameTag = styled.div`
  width: 72px;
  height: 72px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: grid;
  place-items: center;

  & span {
    display: block;
    text-align: center;
    font-size: 2em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--text-light-color);
  }
`;