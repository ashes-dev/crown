import React from 'react'
import './sign-in.styles.scss'

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

                    <input name='email' value={this.state.email} type='email' required onChange={this.handleChange} />
                    <label>Email</label>

                    <input name='password' value={this.state.password} type='password' required onChange={this.handleChange} />
                    <label>Password</label>

                    <input type='submit' value='Submit Form' />

                </form>

            </div>
        )
    }
}

export default SignIn