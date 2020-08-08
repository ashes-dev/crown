import React from 'react'
import './sign-up.styles.scss'

// firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

// compoenents
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custon-button/custon-button.component'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        
        if(password !== confirmPassword) {
            alert('Passwords dont match.')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err)
        }

    }

    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your emial and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput value={displayName}     handleChange={this.handleChange} name='displayName'     type='text'     required label='DisplayName' />
                    <FormInput value={email}           handleChange={this.handleChange} name='email'           type='email'    required label='Email' />
                    <FormInput value={password}        handleChange={this.handleChange} name='password'        type='password' required label='Password' />
                    <FormInput value={confirmPassword} handleChange={this.handleChange} name='confirmPassword' type='password' required label='ConfirmPassword' />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp