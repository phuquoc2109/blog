import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './singlePost.scss'

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    useEffect(()=> {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePost__wrapper">
                {
                    post.photo &&
                    <img className="singlePost__img" src={post.photo} alt="" />
                }
            <div className="singlePost__titleedit">
                <h1 className="singlePost__title">
                   {post.title}
                </h1>
                <div className="singlePost__edit">
                    <i className="fas fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
           <div className="singlePost__info">
               <span className="singlePost__info__author">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
               <span className="singlePost__info__date">{new Date(post.createdAt).toDateString()}</span>
           </div>
           <p className="singlePost__des">{post.desc}</p>
        </div>
        </div>
    )
}
