import React from 'react'
import styled from 'styled-components'

import socialF from '../../assents/social-facebook.png'
import socialI from '../../assents/social-linkedin.png'
import socialL from '../../assents/social-instagram.png'
import socialG from '../../assents/social-github.png'

import LinkSocial from './LinkSocial'

const SocialStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: ${props => props.refHeader ? 'fixed' : 'absolute'};
  top: ${props => props.refHeader ? '65px' : '85px'};
  left: 80px;
  width: 32px;
  width: 150px;
  transition: 0.3s;
  @media (max-width: 900px) {
    left: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const Social = ({refHeader}) => {
  return (
    <SocialStyle refHeader={refHeader}>
      <LinkSocial href="https://www.facebook.com/marcoslimatattoo" src={socialF}/>
      <LinkSocial href="https://www.linkedin.com/in/marcos-alves-4255381a0/" src={socialI}/>
      <LinkSocial href="https://www.instagram.com/marcosdid/" src={socialL}/>
      <LinkSocial href="https://github.com/marcosdid" src={socialG}/>
    </ SocialStyle>
  )
}

export default Social