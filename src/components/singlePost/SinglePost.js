import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlePost.scss';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const {user} = useContext(Context)
    const PF = "http://localhost:5000/images/";
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=> {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[path])

    const handleDelete = async () =>{
        try {
            await axios.delete(`/posts/${post._id}`  , {data: {username: user.username}});
            window.location.replace("/")
        } catch (error) {
            
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`  , {
                username: user.username,
                title: title,
                desc: desc
            });
            // window.location.reload()
            setUpdateMode(false)
        } catch (error) {
            
        }
    }
 
    return (
        <div className="singlePost">
            <div className="singlePost__wrapper">
                {
                    post.photo &&
                    <img className="singlePost__img" src={PF + post.photo} alt="" />
                }
            {
                updateMode ? 
                    (<TextField 
                        autoFocus 
                        fullWidth 
                        label="Edit Title" 
                        value={title} 
                        variant="filled"
                        style={{margin:"20px 0px"}}
                        onChange={(e) => setTitle(e.target.value)}
                    /> )
                     : (
                    <div className="singlePost__titleedit">
                        <h1 className="singlePost__title">
                        {title}
                        </h1>
                        {
                            post.username === user?.username && (
                                <div className="singlePost__edit">
                                    <i onClick={() => setUpdateMode(true)} className="fas fa-edit"></i>
                                    <i onClick={handleDelete} className="far fa-trash-alt"></i>
                                </div>
                        )}
                    </div>
                )
            }
           <div className="singlePost__info">
               <span className="singlePost__info__author">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
               <span className="singlePost__info__date">{new Date(post.createdAt).toDateString()}</span>
           </div>
           {
               updateMode? (
                   <textarea 
                   className="singlePost__des__input"   
                   rows={5}   
                   cols={100}          
                   value={desc}
                   onChange={(e) => setDesc(e.target.value)}
                   />
               ) : (
                <p className="singlePost__des">{desc}</p>
               )
           }
           
        </div>
        {
            updateMode? (
               <>
                <Button 
                onClick={handleUpdate} 
                style={{marginLeft:'20px'}} 
                variant="contained" 
                color="primary" >
                    Update
                </Button>
                <Button 
                onClick={() => setUpdateMode(false)} 
                style={{marginLeft:'20px'}} 
                variant="contained" 
                color="secondary" >
                    Cancel
                </Button>
               </>
            ) : ''
        }
        </div>
    )
}
