import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings__wrapper">
                <div className="settings__wrapper__title">
                    <span className="settings__wrapper__title__update">Update Your Account</span>
                    <span className="settings__wrapper__title__delete">Delete Account</span>
                </div>
                <form className="settings__form" action="">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settings__form__PP">
                        <img src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1240" alt="" />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle"></i>
                        </label>
                    </div>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <label htmlFor="">Username</label>
                    <TextField type="text" placeholder="PhuQuoc" label="Username" variant="filled" />
                    <label htmlFor="">Email</label>
                    <TextField type="email" placeholder="quocduongphu@gmail.com" label="Email" variant="filled" />
                    <label htmlFor="">Password</label>
                    <TextField type="password" label="Password" variant="filled" />
                    <Button className="settings__form__submit" type="submit" style={{marginTop:'15px'}} variant="contained" color="primary">
                        Update
                    </Button> 
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
