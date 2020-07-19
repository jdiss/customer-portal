import { createGlobalStyle } from "styled-components";
import Nunito from "./assets/fonts/Nunito-Regular.ttf";

const GlobalStyle = createGlobalStyle`
        @font-face {
            font-family: "Nunito";
            src: local("Nunito"),
            url(${Nunito}) format("truetype");
        }

        body {
          margin: 0;
          font-size: 16px;
          font-family: Nunito;
          background-color:#F9F9F9;
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
