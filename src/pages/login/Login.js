import React from 'react'
import './login.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login() {
    return (
        <div className="login">
            <span className="login__title">Login</span>
            <form className="login__form" action="">
                <label htmlFor="">Email</label>
                <TextField type="email" placeholder="Enter your email" label="Email" variant="filled" />
                <label htmlFor="">Password</label>
                <TextField type="password" placeholder="Enter your password" label="Password" variant="filled" />
                <Button size="large" className="login__form__login" variant="contained" color="primary">
                        Login
                </Button> 
            </form>
            <Button className="login__register" variant="contained" color="secondary">
                Register
            </Button> 
        </div>
    )
}
