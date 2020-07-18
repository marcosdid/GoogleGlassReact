import styled from 'styled-components'

export const MyFooter = styled.footer`
  border-top: 1px solid black;
  margin-top: 5px;
  p {
    margin: 10px 0px;
    text-align: center;
    a {
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`