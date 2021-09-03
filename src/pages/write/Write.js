import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../context/Context';
import './write.scss';


export default function Write() {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [cats, setCats] = useState([])

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: title,
            desc: desc,
            categories: categories,
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
            if(title.length > 1 && desc && categories ){
                try {
                    const res = await axios.post("/posts", newPost)
                    window.location.replace("/post/" + res.data._id);
                    toast.success("Successful writing");
                } catch (err) {
                    
                }
            }else{
                toast.error("You have not entered title and description");
            } 
    }

    const fetchCats = async () => {
        const res = await axios.get('/categories');
        setCats(res.data);
    }
    useEffect(() => {
        fetchCats();
    }, [])


    toast.configure();
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
                <FormControl style={{marginLeft:'11%', marginBottom:'20px'}} className="write__form__group">
                    <InputLabel >Categories</InputLabel>
                    <NativeSelect
                    onChange={e => setCategories(e.target.value)}
                    >
                        <option  value="" />
                    {
                        cats.map(cat => (
                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                        ))
                    }
                    </NativeSelect>
                </FormControl>

                <div className="write__form__group">
                    <textarea 
                    placeholder="Tell your story" 
                    className="write__form__group__inputare" 
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
