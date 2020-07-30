import React from 'react'
import {SocialStyle, ImgSocialStyle} from './style'
import socialF from '../../assents/social-facebook.png'
import socialI from '../../assents/social-linkedin.png'
import socialL from '../../assents/social-instagram.png'

const Social = () => {
  return (
    <SocialStyle>
      <a href="https://www.facebook.com/marcoslimatattoo" target="_blank" rel="noopener noreferrer">
        <ImgSocialStyle src={socialF}/>
      </a>
      <a href="https://www.instagram.com/marcosdid/" target="_blank" rel="noopener noreferrer">
        <ImgSocialStyle src={socialI}/>
      </a>
      <a href="https://www.linkedin.com/in/marcos-alves-4255381a0/" target="_blank" rel="noopener noreferrer">
        <ImgSocialStyle src={socialL}/>
      </a>
    </ SocialStyle>
  )
}

export default Social