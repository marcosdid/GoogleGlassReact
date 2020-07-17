import React, { useEffect, useRef } from 'react'

import logo from '../../assents/logo.png'

import { Myheader } from './style'

function Header() {
  const refHeader = useRef()

  useEffect(() => {
    window.addEventListener('scroll', AnimateMenu)
  })
  
  function AnimateMenu() {
    const scroll = window.scrollY

    if(scroll >= 20) {
      refHeader.current.headerPosition = true

      console.log(refHeader)
    }

    if(scroll <= 20) {
      refHeader.current.headerPosition = false

      console.log(refHeader.current)
    }
  }

  return (
    <Myheader ref={refHeader} >
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
