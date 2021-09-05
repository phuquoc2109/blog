import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from '../../Config';
import './register.scss';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if(email && password && username){
            try {
                const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
            toast.success("Successful account registration");
            } catch (error) {
                setError(true);
                toast.warning("Username or Email has been duplicated")
            }
        }else{
            setError(true);
            toast.warning("You have not entered your account information")
        }
    }

    toast.configure();
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
                    error ? <Alert style={{marginTop:"10px"}} variant="standard" severity="warning">Something went wrong!</Alert> : ''
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
