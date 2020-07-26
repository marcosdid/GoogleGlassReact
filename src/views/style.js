import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  padding: 95px 35px 0px;
  background-color: #ffffff;
  transition: 0.3s;
  @media (max-width: 900px) and (min-width: 767px) {
    max-width: calc(100% - 50px);
  }
  @media (max-width: 768px) {
    padding: 80px 20px 0px;
    max-width: 100%;
  }
`

const DivGeneric = styled.div`
  height: 100%;
  width: 100%;
`

export {Container, DivGeneric}