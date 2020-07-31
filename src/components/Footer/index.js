import React from 'react'

import {MyFooter} from './styles'
import {SocialStyleFooter} from './styles'
import LinkSocial from '../../components/Social/LinkSocial'

import socialF from '../../assents/social-facebook.png'
import socialI from '../../assents/social-linkedin.png'
import socialL from '../../assents/social-instagram.png'
import socialG from '../../assents/social-github.png'

export default function Footer() {
  return (
    <MyFooter>
      <div>
        <p>Copyright 2020 - by Marcos A</p>
        <a href="https://www.google.com/glass/start/" target="blank">Site Oficial</a>
      </div>
        <SocialStyleFooter >
          <LinkSocial width="24" href="https://www.facebook.com/marcoslimatattoo" src={socialF}/>
          <LinkSocial width="24" href="https://www.instagram.com/marcosdid/" src={socialL}/>
          <LinkSocial width="24" href="https://www.linkedin.com/in/marcos-alves-4255381a0/" src={socialI}/>
          <LinkSocial width="24" href="https://github.com/marcosdid" src={socialG}/>
        </ SocialStyleFooter>
    </MyFooter>
  )
}