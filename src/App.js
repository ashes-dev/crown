import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'

// firebase
import { auth } from './firebase/firebase.utils'

// components
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: null }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser} />
    
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>

      </div>
    )
  }

}

export default App