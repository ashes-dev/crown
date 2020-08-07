import React from 'react'
import './sign-in.styles.scss'

// firebase
import { SignInWithGoogle } from '../../firebase/firebase.utils'

// components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custon-button/custon-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }
    
    handleSubmit = evt => {
        evt.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>

                <h2>I alraedy have an account.</h2>
                <span>Sgin in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' label='Email' value={this.state.email} type='email' required handleChange={this.handleChange} />

                    <FormInput name='password' label='Password' value={this.state.password} type='password' required handleChange={this.handleChange} />

                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn