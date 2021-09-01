import React, { useState } from 'react'
import './register.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
        }
        
    }

    return (
        <div className="register">
            <span className="register__title">Register</span>
            <form className="register__form" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <TextField 
                type="text" 
                placeholder="Enter your username" 
                label="Username" 
                variant="filled" 
                onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <TextField 
                type="email" 
                placeholder="Enter your email" 
                label="Email" 
                variant="filled"
                onChange={e => setEmail(e.target.value)} 
                />
                <label htmlFor="">Password</label>
                <TextField 
                type="password" 
                placeholder="Enter your password" 
                label="Password" 
                variant="filled" 
                onChange={e => setPassword(e.target.value)}
                />
                <Button 
                type="submit"
                style={{marginTop:'20px'}} 
                size="large" 
                className="register__form__register" 
                variant="contained" 
                color="primary">
                        Register
                </Button> 
                {
                    error ? <Alert severity="warning">Something went wrong!</Alert> : ''
                }
            </form>
            <Link to="/login">
                <Button className="register__login" variant="contained" color="secondary">
                    Login
                </Button> 
            </Link>
            
        </div>
    )
}
