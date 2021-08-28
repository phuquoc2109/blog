import React from 'react'
import './post.scss'

export default function Post() {
    return (
        <div className="post">
            <img className="post__img" src="https://images.pexels.com/photos/9305213/pexels-photo-9305213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
            <div className="post__info">
                <div className="post__info__cats">
                    <span className="post__info__cats__cat">Music</span>
                    <span className="post__info__cats__cat">Life</span>
                </div>
                <span className="post__info__title">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="post__info__data">1 hour ago</span>
                <p className="post__info__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error culpa odit fugit tempora, suscipit dolor libero nam, cumque aut voluptatum corrupti eveniet minus repellat voluptate sint ipsum, maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error culpa odit fugit tempora, suscipit dolor libero nam, cumque aut voluptatum corrupti eveniet minus repellat voluptate sint ipsum, maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error culpa odit fugit tempora, suscipit dolor libero nam, cumque aut voluptatum corrupti eveniet minus repellat voluptate sint ipsum, maiores voluptates.</p>
            </div>
        </div>
    )
}
