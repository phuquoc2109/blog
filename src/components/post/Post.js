import React from 'react'
import './post.scss'
import {Link} from 'react-router-dom'

export default function Post({post}) {
    return (
        <div className="post">
            {
            post.photo &&
                <img className="post__img" src={post.photo} alt="" />
            }
            <div className="post__info">
                <div className="post__info__cats">
                    {
                        post.categories.map((categ, index) => (
                            <span key={index} className="post__info__cats__cat">{categ.name}</span>
                        ))
                    }
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
