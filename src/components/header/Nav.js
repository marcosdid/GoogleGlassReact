import React from 'react'
import Link from '../Link'

import LinkSocial from '../../components/Social/LinkSocial'

import socialF from '../../assents/social-facebook.png'
import socialI from '../../assents/social-linkedin.png'
import socialL from '../../assents/social-instagram.png'
import socialG from '../../assents/social-github.png'

import { Nav, SocialStyleFooter } from './styles'

const NavRigth = ({open}) => {
  return (
    <>
      <Nav open={open} >
        <div className="divgeneric">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fotos">Fotos</Link></li>
            <li><Link to="/especificacoes">Especificações</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          <SocialStyleFooter >
            <LinkSocial width="24" href="https://www.facebook.com/marcoslimatattoo" src={socialF}/>
            <LinkSocial width="24" href="https://www.instagram.com/marcosdid/" src={socialL}/>
            <LinkSocial width="24" href="https://www.linkedin.com/in/marcos-alves-4255381a0/" src={socialI}/>
            <LinkSocial width="24" href="https://github.com/marcosdid" src={socialG}/>
          </ SocialStyleFooter>
        </div>
      </Nav>
    </>
  )
}

export default NavRigth