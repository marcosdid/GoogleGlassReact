import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkH = ({to, children}) => {
  return (
    <NavLink 
      activeStyle = {{ borderBottom: '2px solid #1087ff' }} 
      to={to} 
      exact>
        {children}
      </NavLink>
  )
}

export default LinkH