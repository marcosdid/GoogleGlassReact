import styled from 'styled-components'

const Container = styled.div`
  padding: 100px 35px 0px;
  width: 100%;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  background-color: #ffffff;
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 100px 20px 0px;
    max-width: 100%;
  } 
`

export {Container}