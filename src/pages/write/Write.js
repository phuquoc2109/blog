import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import './write.scss';

export default function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: title,
            desc: desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {
                
            }
        };
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            
        }
    }

    return (
        <div className="write">
            {
                file && (<img className="write__img" src={URL.createObjectURL(file)} alt="" />)
            }
            <form className="write__form" onSubmit={handleSubmit}>
                <div className="write__form__group">
                   <label htmlFor="fileInput">
                       <i className="write__form__icon fas fa-plus"></i>
                   </label>
                    <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:'none'}} 
                    onChange={e => setFile(e.target.files[0])} 
                    />
                    <input 
                    className="write__form__group__input" 
                    type="text" 
                    placeholder="Title..." 
                    autoFocus={true} 
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="write__form__group">
                    <textarea 
                    placeholder="Tell your story" 
                    lassName="write__form__group__inputare" 
                    cols="30" rows="5"
                    onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button
                type="submit"
                className="write__form__submit">
                    Publish
                </button>
            </form>
        </div>
    )
}
