import styled from 'styled-components'

export const MyFooter = styled.footer`
  justify-content: flex-end;
  width: 100%;
  border-top: 2px solid rgb(220,220,220);
  margin-top: 10px;
  p {
    margin: 10px 0px;
    text-align: center;
    a {
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
        color: #1087ff;
      }
    }
  }
`