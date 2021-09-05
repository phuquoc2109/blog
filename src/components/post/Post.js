import React from 'react'
import './post.scss'
import {Link} from 'react-router-dom'
import { PF } from '../../pages/home/Home'

export default function Post({post}) {

    return (
        <div className="post">
            {
            post.photo &&
                <img className="post__img" src={PF + post.photo} alt="" />
            }
            <div className="post__info">
                <div className="post__info__cats">
                    <span  className="post__info__cats__cat">{post.categories}</span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="post__info__title">
                    {post.title}
                    </span>
                </Link>
                <hr />
                <span className="post__info__data">{new Date(post.createdAt).toDateString()}</span>
                <p className="post__info__des">{post.desc}</p>
            </div>
        </div>
    )
}
