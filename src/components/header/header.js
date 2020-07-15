import React from 'react'

import logo from '../../assents/glass-logo-peq.jpg'

import { Myheader } from './style'

function Header() {
  return (
    <Myheader>
      <img src={logo} alt='logo glass' />

      <nav>
        <ul>
          <li>Home</li>
          <li>Especificações</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </Myheader>
  )
}

export default Header
