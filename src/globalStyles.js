import styled ,{ createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    background-color: rgba(220, 220, 220, 0.3);
    font-family: 'Roboto', sans-serif;
  }

  p {
    text-align: justify;
  }
`

const Body = styled.div`
  padding: 100px 50px 5px;
  max-width: 1300px;
  margin: 0 auto;
  background-color: #ffffff;  
`

export {GlobalStyled, Body } 

