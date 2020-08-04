import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import useHasScrolled from '../../hooks/useHasScrolled'

import Burguer from './Burguer'
import Social from '../../components/Social'

import { Myheader, ImgStyle } from './styles'

function Header() {
  const scrolled = useHasScrolled()
  const [refHeader, setRefHeader] = useState(scrolled);

  useEffect(() => {
    setRefHeader(scrolled)
  }, [scrolled])

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