import styled, { createGlobalStyle, injectGlobal } from "styled-components";
import Nunito from "./assets/fonts/Nunito-Regular.ttf";

const GlobalStyle = createGlobalStyle`
        @font-face {
            font-family: "Nunito";
            src: local("Nunito"),
            url(${Nunito}) format("truetype");
        }
        :root {
            --spacing-multiplier: 1;
            --primary-font-size: 16px;
            --bg-color: #F9F9F9;
            --primary-color: #192e58;
            --text-color: #111111;
            --border-color: #DDDDDD;
            --main-font-family: Nunito;
            @media (min-width: 700px) {
                --spacing-multiplier: 1.5;
            }
        }

        body {
          margin: 0;
          font-size: var(--primary-font-size);
          font-family: var(--main-font-family);
          background-color:var(--bg-color);
          line-height: 1.45rem;
	        color: #444;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          
        }
        *:focus {outline:none}

        #root{
          width:100vw;
          height:100vh;
        }
`;

export const Layout = styled.div`
  display: grid;
  grid-gap: 0.75em;
  grid-template-rows: [header] 100px [body] auto;
  grid-template-columns:
    [full-start]
    minmax(0.75em, 4fr)
    [main-start]
    repeat(14, minmax(0.25em, 1fr))
    [main-end]
    minmax(0.75em, 4fr)
    [full-end];
`;

export const Header = styled.div`
  grid-row: header;
  grid-column: full-start/full-end;
  background-color: var(--primary-color);
`;

export const Main = styled.div`
  grid-row: body;
  grid-column: main-start/main-end;
`;

export const Filters = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  color: #cccc;
  font-size: 2.5em;

  & svg {
    font-size: 2rem;
  }

  & h2 {
    color: #000;
    font-size: 1.5rem;
  }
`;

export const ListHeader = styled.div``;

export const RowList = styled.div``;

export const Button = styled.button`
  display: grid;
  grid-template: 1fr / 16px auto auto 16px;
  border: 1px solid #ccc;
  border-radius: 60px;
  place-items: center;
  cursor: pointer;
  background-color: #192e58;
  color: #fff;

  & svg {
    grid-column: 2;
    place-self: center;
    font-size: 0.5em;
  }
  & span {
    grid-column: 3;
    border: 0;
    padding: 0.5rem;
    font-size: 0.85rem;
  }
`;

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

export default GlobalStyle;
