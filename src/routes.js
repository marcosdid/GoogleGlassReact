import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}

export default Routes
