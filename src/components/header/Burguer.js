import React, {useState} from 'react'

import { Burguer } from './styles'

const BurguerNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Burguer open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Burguer>
  )
}

export default BurguerNav