import React from 'react'

import {MyFooter} from './styles'
import logoGoogle from '../../assents/images.png'


export default function Footer() {
  return (
    <MyFooter>
      <div>
        <p>Copyright 2020 - by Marcos A</p>
        <a href="https://www.google.com/glass/start/" target="blank">Site Oficial</a>
      </div>
      <img src={logoGoogle} alt="logo Do Google"></img>
    </MyFooter>
  )
}
