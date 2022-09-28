import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "Jost", sans-serif;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  #root {
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
