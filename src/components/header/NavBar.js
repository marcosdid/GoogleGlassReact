import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { Myheader, ImgStyle } from './styles'

import Burguer from './Burguer'
import Social from '../../components/Social'

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
      <Link to="/">
        <ImgStyle refHeader={refHeader} />
      </Link>
      <Burguer refHeader={refHeader} />
      <Social refHeader={refHeader} />
    </Myheader>
  )
}

export default Header