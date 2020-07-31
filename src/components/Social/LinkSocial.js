import React from 'react'

import {ImgSocialStyle} from './style'

const LinkSocial = ({src, href}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <ImgSocialStyle src={src}/>
    </a>
  )
}

export default LinkSocial