import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { Myheader, ImgStyle } from './styles'
import Burguer from './Burguer'
import useHasScrolled from '../../hooks/useHasScrolled'

function Header() {
  const [refHeader, setRefHeader] = useState(false);

  const scroll = useHasScrolled()
  scroll ? setRefHeader(true) : setRefHeader(false)
  console.log(scroll)

  return (
    <Myheader refHeader={refHeader} >
      <Link to="/">
        <ImgStyle refHeader={refHeader} />
      </Link>
      <Burguer refHeader={refHeader} />
    </Myheader>
  )
}

export default Header