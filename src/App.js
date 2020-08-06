import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'

// components
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

const App = () => (
  <div className='app'>
    <Header />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SignInSignUp} />
    </Switch>
    
  </div>
)

export default App