import styled ,{ createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    background-color: rgba(220, 220, 220, 0.3);
    font-family: 'Roboto', sans-serif;
  }

  p {
    text-align: justify;
    font-size: 17px;
  }
`
const Body = styled.div`
  padding: ${props => props.refWindow ? '100px 20px 5px' : '100px 35px 5px'};
  max-width: 1280px;
  margin: 0 auto;
  background-color: #ffffff;  
`

export {GlobalStyled, Body } 

