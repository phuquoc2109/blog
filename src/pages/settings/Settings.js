import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { UpdateFailure, UpdateStart, UpdateSuccess } from '../../context/Actions';
import { Context } from '../../context/Context';
import './settings.scss';

export default function Settings() {
    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PE = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(UpdateStart())
        const updateUser = {
            userId: user._id,
            username: username,
            email: email,
            password: password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {
                
            }
        };
        try {
            const res = await axios.put("/users/" + user._id, updateUser)
            dispatch(UpdateSuccess(res.data))
            window.location.reload();
        } catch (err) {
            dispatch(UpdateFailure())
        }
    }

    return (
        <div className="settings">
            <div className="settings__wrapper">
                <div className="settings__wrapper__title">
                    <span className="settings__wrapper__title__update">Update Your Account</span>
                    <span className="settings__wrapper__title__delete">Delete Account</span>
                </div>
                <form className="settings__form" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settings__form__PP">
                        <img 
                        src={file ? URL.createObjectURL(file) : PE + user.profilePic} 
                        alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle"></i>
                        </label>
                    </div>
                    <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}}
                    onChange={e => setFile(e.target.files[0])}  
                    />
                    <label htmlFor="">Username</label>
                    <TextField 
                    type="text" 
                    placeholder={user.username} 
                    label="Username" 
                    variant="filled" 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="">Email</label>
                    <TextField 
                    type="email" 
                    placeholder={user.email} 
                    label="Email" 
                    variant="filled" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">Password</label>
                    <TextField 
                    type="password" 
                    label="Password" 
                    variant="filled" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    className="settings__form__submit"  
                    style={{marginTop:'15px'}} 
                    variant="contained" color="primary">
                        Update
                    </Button> 
                    <Button
                    className="settings__form__submit" 
                    type="reset" 
                    style={{marginTop:'15px'}}
                    onClick={() => window.location.reload()}
                    variant="contained" color="secondary">
                        Cancel
                    </Button> 
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
