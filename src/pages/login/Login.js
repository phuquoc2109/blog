import React, { useContext, useRef, useState } from 'react'
import './login.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Context } from '../../context/Context';
import axios from 'axios';
import { LoginFailure, LoginStart, LoginSuccess } from '../../context/Actions';
import { useHistory } from 'react-router-dom';


export default function Login() {

    // const userRef = useRef();
    // const passwordRef = useRef();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const {user, dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginStart())
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                username: username,
                password: password,
            })
            dispatch(LoginSuccess(res.data))
            history.push("/")
        } catch (error) {
            dispatch(LoginFailure())
        }
        
    }
   

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
            <Button className="login__register" variant="contained" color="secondary">
                Register
            </Button> 
        </div>
    )
}
