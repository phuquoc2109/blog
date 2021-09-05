import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from '../../Config';
import { LoginFailure, LoginStart, LoginSuccess } from '../../context/Actions';
import { Context } from '../../context/Context';
import './login.scss';


export default function Login() {

    // const userRef = useRef();
    // const passwordRef = useRef();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginStart())
        try {
            const res = await axiosInstance.post("/auth/login",{
                username: username,
                password: password,
            })
            dispatch(LoginSuccess(res.data))
            window.location.replace("/");
        } catch (error) {
            dispatch(LoginFailure())
            toast.error("Login failed")
        }
        
    }
   
    toast.configure();
    return (
        <div className="login">
            <span className="login__title">Login</span>
            <form className="login__form" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <TextField 
                type="text" 
                placeholder="Enter your username..." 
                label="UserName" 
                variant="filled" 
                // ref={userRef}
                onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <TextField 
                type="password" 
                placeholder="Enter your password" 
                label="Password" 
                variant="filled"
                // ref={passwordRef} 
                onChange={e => setPassword(e.target.value)}
                />
                <Button 
                type="submit"
                style={{marginTop:'20px'}} 
                size="large" 
                className="login__form__login" 
                variant="contained" 
                color="primary"
                disabled={isFetching}
                >
                        Login
                </Button> 
            </form>
            <Link to="/register">
                <Button className="login__register" variant="contained" color="secondary">
                    Register
                </Button> 
            </Link>
        </div>
    )
}
