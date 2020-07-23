import React, { useEffect, useState } from 'react'

import { Myheader } from './styles'

import Nav from './Nav'
import Burguer from './Burguer'

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

      <Nav />
      <Burguer />
    </Myheader>
  )
}

export default Header