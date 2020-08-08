import React from 'react'
import './sign-in.styles.scss'

// firebase
import { SignInWithGoogle, auth } from '../../firebase/firebase.utils'

// components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custon-button/custon-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }
    
    handleSubmit = async evt => {
        evt.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.error(err)
        }
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

                    <FormInput name='email'    label='Email'    value={this.state.email}    type='email'    required handleChange={this.handleChange} />
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