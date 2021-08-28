import React from 'react'
import './register.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Register() {
    return (
        <div className="register">
            <span className="register__title">Register</span>
            <form className="register__form" action="">
                <label htmlFor="">Username</label>
                <TextField type="text" placeholder="Enter your username" label="Username" variant="filled" />
                <label htmlFor="">Email</label>
                <TextField type="email" placeholder="Enter your email" label="Email" variant="filled" />
                <label htmlFor="">Password</label>
                <TextField type="password" placeholder="Enter your password" label="Password" variant="filled" />
                <Button size="large" className="register__form__register" variant="contained" color="primary">
                        Register
                </Button> 
            </form>
            <Button className="register__login" variant="contained" color="secondary">
                Login
            </Button> 
        </div>
    )
}
