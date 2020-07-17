import React, { useEffect, useState } from 'react'

import { Myheader } from './style'

function Header() {
  const [refHeader, setRefHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      scroll >= 20 ? setRefHeader(true) : setRefHeader(false);
    })
  })

  return (
    <Myheader refHeader={refHeader} >
      <img src='' alt=''/>

      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Especificações</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
    </Myheader>
  )
}

export default Header