import styled from 'styled-components'

import logo from '../../assents/logo.png'

export const Myheader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: ${props => props.refHeader ? '50px' : '70px'};
  padding: ${props => props.refHeader ? '8px 135px' : '20px 135px'};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 2;
  @media (max-width: 900px) {
    padding: ${props => props.refHeader ? '20px 55px' : '20px 55px'};
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ImgStyle = styled.img.attrs({
  src: logo,
  alt: "logo"
})` 
  width: ${props => props.refHeader ? '160px' : '170px'};
  height: ${props => props.refHeader ? '35px' : '40px'};
  transition: 0.3s;
  @media (max-width: 900px) {
    width: 110px;
    height: 30px;
  }
  @media (max-width: 425px) {
    width: 90px;
    height: 20px;
  }
`

export const Burguer = styled.div`
  display: none;
  position: fixed;
  top: ${props => props.refHeader ? '15px' : '25px'};
  right: 55px;
  width: 30px;
  height: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  z-index: 20;
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 768px) {
    right: 20px;
  }
  @media (hover: hover) {
    &:hover div {
      background-color: #1087ff;
    }
  }
  div {
    width: 2.5rem;
    height: 3px;
    margin-top: 0px;
    background-color: black;
    transform-origin: 1px;
    transition: .3s;
    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg) translate(7px,-8px)' : 'rotate(0)'};
      width: ${({open}) => open ? '2.8rem' : '2.5rem'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg) translate(7px,8px)' : 'rotate(0)'};
      width: ${({open}) => open ? '2.8rem' : '2.5rem'};
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.4s opacity;
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
        font-size: 1.8rem;
        text-transform: uppercase;
        text-decoration: none;
        padding-bottom: 5px;
        @media (hover: hover) {
          &:hover {
            border-bottom: 2px solid #1087ff;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, .2);
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({open}) => open ? '1' : '0'};
    ul {
      height: 100%;
      padding: 30px 30px 0px;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      background-color: white;
      flex-direction: column;
      transition: 0.4s transform;
      li {
        padding-top: 20px;
        a {
          color: black;
          font-size: 2.0rem;
        }
      }
    }
  }
`