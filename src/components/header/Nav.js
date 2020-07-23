import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from './styles'

const NavRigth = () => {
  return (
    <Nav className="menu-inline">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/especificacoes">Especificações</Link></li>
        <li><Link to="/fotos">Fotos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </Nav>
  )
}

export default NavRigth