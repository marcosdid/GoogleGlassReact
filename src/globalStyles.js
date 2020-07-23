import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
  }

  html {
    line-height: 1.6;
    font-size: 62.5%;
  }

  body {
    background-color: rgba(220, 220, 220, 0.3);
    font-size: 1.6rem;
  }

  p {
    text-align: justify;
  }
`


export default GlobalStyled

