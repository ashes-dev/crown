import React from 'react'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// components
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

class App extends React.Component {
  unSubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className='app'>

        <Header />
    
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInSignUp/>}/>
        </Switch>

      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)