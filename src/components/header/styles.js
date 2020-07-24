import styled from 'styled-components'

import logo from '../../assents/logo.png'
import logo2 from '../../assents/glass-logo-peq.jpg'

const Myheader = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.refHeader ? '8px 135px' : '20px 135px'};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  @media (max-width: 900px) {
    padding: ${props => props.refHeader ? '8px 55px' : '20px 55px'};
  }
  @media (max-width: 768px) {
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
  display: none;
  width: 30px;
  height: 22px;
  position: fixed;
  top: ${props => props.refHeader ? '12px' : '25px'};
  right: 130px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  z-index: 20;
  @media (max-width: 900px) {
    display: flex;
    right: 55px;
  }
  @media (max-width: 768px) {
    right: 20px;
  }

  &:hover {
    div {
      background-color: #1087ff;
    }  
  }


  div {
    margin-top: 0px;
    width: 2.5rem;
    height: 4px;
    background-color: black;
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
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    li {
      margin: 0 15px 0;
      a {
        color: black;
        text-decoration: none;
        font-size: 2.0rem;

        &:hover {
          color: #1087ff;
        }
      }
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    align-items: center;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({open}) => open ? '1' : '0'};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: 0.3s ease-in-out;
    ul {
      width: 100%;
      align-items: center;
      justify-content: space-around;
      padding-right: 50px;
      li {
        margin: 0;
        a {
          color: black;
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