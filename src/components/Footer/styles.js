import styled from 'styled-components'

export const MyFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  border-top: 2px solid rgb(220,220,220);
  margin-top: 10px;
  div {
    text-align: center;
      p {
      text-indent: 0;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 1.5rem;
      padding-bottom: 5px;
      &:hover {
        color: #1087ff;
      }
    }
  }
  
  @media(max-width: 768px) {
    justify-content: space-between;
    p {
      font-size: 1.5rem;
      
    }
  }
`

export const SocialStyleFooter = styled.div`
  display: none;
  justify-content: space-between;
  width: 120px;
  @media(max-width: 768px) {
    display: flex;
  }
`
