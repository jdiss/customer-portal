import { createGlobalStyle, injectGlobal } from "styled-components";
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
            --primary-color: #0074D9;
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

export default GlobalStyle;
