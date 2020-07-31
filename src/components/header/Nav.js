import React from 'react'
import Link from '../Link'

import { Nav } from './styles'

const NavRigth = ({open}) => {
  return (
    <Nav open={open}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fotos">Fotos</Link></li>
        <li><Link to="/especificacoes">Especificações</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </Nav>
  )
}

export default NavRigth