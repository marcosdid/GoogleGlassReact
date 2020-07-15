import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}

export default Routes
