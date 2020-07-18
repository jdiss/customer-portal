import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        body {
          margin: 0;
          font-size: 16px;
          font-family: sans-serif;
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
