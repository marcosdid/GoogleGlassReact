import React from 'react'

const LinkSocial = ({src, href, width=32}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <img width={width + 'px'} src={src} alt="social"/>
    </a>
  )
}

export default LinkSocial