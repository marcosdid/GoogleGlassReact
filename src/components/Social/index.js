import React from 'react'

import {SocialStyle} from './style'

import socialF from '../../assents/social-facebook.png'
import socialI from '../../assents/social-linkedin.png'
import socialL from '../../assents/social-instagram.png'

import LinkSocial from './LinkSocial'

const Social = ({refHeader}) => {
  return (
    <SocialStyle refHeader={refHeader}>
      <LinkSocial href="https://www.facebook.com/marcoslimatattoo" src={socialF}/>
      <LinkSocial href="https://www.instagram.com/marcosdid/" src={socialI}/>
      <LinkSocial href="https://www.linkedin.com/in/marcos-alves-4255381a0/" src={socialL}/>
    </ SocialStyle>
  )
}

export default Social