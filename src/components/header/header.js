import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Myheader } from './style'

function Header() {
  const [refHeader, setRefHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      scroll >= 1 ? setRefHeader(true) : setRefHeader(false);
    })
  })

  return (
    <Myheader refHeader={refHeader} >
      <img src='' alt=''/>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/especificacoes">Especificações</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </Myheader>
  )
}

export default Header