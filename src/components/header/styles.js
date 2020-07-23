import styled from 'styled-components'

import logo from '../../assents/logo.png'
import logo2 from '../../assents/glass-logo-peq.jpg'

const Myheader = styled.div`
  position: fixed;
  z-index: 2;
  max-width: calc(100% - 200px);
  height: ${props => props.refHeader ? '60px' : 'auto'};
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${props => props.refHeader ? '8px 35px 8px' : '30px 35px 30px'};
  transition: 0.3s;
  background-color: ${props => props.refHeader ? '#fff' : 'rgb(220,220,220)' };

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  
  img {
    background-image: url(${props => props.refHeader ? logo2 : logo });
    background-size: 170px 40px;
    background-repeat: no-repeat;
    border: 0;
    width: 170px;
    height: 40px;
    transition: 0.3s;
    @media (max-width: 900px) {
      background-size: 140px 30px;
      width: 150px;
      height: 30px;
    }
  }
`

const Burguer = styled.div`
  width: 30px;
  height: 22px;
  position: fixed;
  top: 32px;
  right: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  @media (max-width: 768px) {
    right: 20px;
  }
  div {
    margin-top: 0px;
    width: 2.5rem;
    height: 4px;
    background-color: ${({open}) => open ? 'white' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: .3s;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg) translate(7px,-7px)' : 'rotate(0)'};
      width: ${({open}) => open ? '2.8rem' : '2.5rem'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg) translate(7px,7px)' : 'rotate(0)'};
      width: ${({open}) => open ? '2.8rem' : '2.5rem'};
    }
  }
`

const Nav = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    li {
      margin: 0 15px 0;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    display: none;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    ul {
      width: 100%;
      align-items: center;
      justify-content: space-around;
      padding-right: 50px;
      li {
        margin: 0;
        a {
          color: white;
          font-size: 2.0rem;

          @media (max-width: 424px) {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

 

`

export { Burguer, Myheader, Nav }