import styled, { createGlobalStyle } from "styled-components";
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
            --secondary-color: #F05669;
            --primary-color-hover: #fff;
            --secondary-color-hover: #fff;
            --primary-color-hover-text: #000;
            --secondary-color-hover-text: #000;
            --text-light-color: #fff;
            --text-color: #111111;
            --border-color: #DDDDDD;
            --shade-color: #DDDDDD;
            --dark-shade-color: #bbb7b7;
            --main-font-family: Nunito;
            --high-color: #F15A22;
            --invalid-color:#F05669;
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
  margin: 3rem 0;
`;

export default GlobalStyle;
