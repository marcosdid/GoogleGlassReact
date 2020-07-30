import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, div#root {
    height: 100%;
    margin: 0;
  }

  html {
    line-height: 1.6;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
  }

  body {
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 2.1rem;
    text-align: center;
  }

  p {
    text-indent: 2rem;
    font-size: 1.6rem;
    text-align: justify;
    color: rgb(77, 77, 77);
  }

`


export default GlobalStyled

