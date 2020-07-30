import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/home/Home'
import Contato from './views/contato'
import Fotos from './views/fotos'
import Espec from './views/espec'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contato' component={Contato} />
        <Route path='/fotos' component={Fotos} />
        <Route path='/especificacoes' component={Espec} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
