import React, {useState} from 'react'

import { Burguer } from './styles'
import Nav from './Nav'

const BurguerNav = ({refHeader}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burguer refHeader={refHeader} open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burguer>
      <Nav open={open}/>
    </>
  )
}

export default BurguerNav