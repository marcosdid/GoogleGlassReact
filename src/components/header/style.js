import styled from 'styled-components'

import logo from '../../assents/logo.png'
import logo2 from '../../assents/glass-logo-peq.jpg'

export const Myheader = styled.div`
  position: fixed;
  z-index: 2;
  max-width: 1250px;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${props => props.refHeader ? '8px 50px 8px' : '30px 50px 30px'};
  transition: 1s;
  background-color: ${props => props.refHeader ? '#fff' : 'rgb(220,220,220)' };

  img {
    background-image: url(${props => props.refHeader ? logo2 : logo });
    background-size: 170px 40px;
    background-repeat: no-repeat;
    border: 0;
    width: 170px;
    height: 40px;
  }

  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 15pt;
      li {
        margin: 0 15px 0;
        a {
          color: black;
          text-decoration: none;
        }
      }
    }
  }
`