import React from 'react'
import './singlePost.scss'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost__wrapper">
                <img className="singlePost__img" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&h=700&w=1140" alt="" />
            <div className="singlePost__titleedit">
                <h1 className="singlePost__title">
                    Lorem ipsum dolor, sit.
                </h1>
                <div className="singlePost__edit">
                    <i className="fas fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
           <div className="singlePost__info">
               <span className="singlePost__info__author">Author: <b>PhuQuoc</b></span>
               <span className="singlePost__info__date">1 hour ago</span>
           </div>
           <p className="singlePost__des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure delectus optio ex nihil asperiores ipsum culpa nobis ipsa. Saepe pariatur praesentium voluptatem et quo earum at necessitatibus dolore mollitia nequeLorem ipsum dolor sit, amet consectetur adipisicing elit. Iure delectus optio ex nihil asperiores ipsum culpa nobis ipsa. Saepe pariatur praesentium voluptatem et quo earum at necessitatibus dolore mollitia nequeLorem ipsum dolor sit, amet consectetur adipisicing elit. Iure delectus optio ex nihil asperiores ipsum culpa nobis ipsa. Saepe pariatur praesentium voluptatem et quo earum at necessitatibus dolore mollitia nequeLorem ipsum dolor sit, amet consectetur adipisicing elit. Iure delectus optio ex nihil asperiores ipsum culpa nobis ipsa. Saepe pariatur praesentium voluptatem et quo earum at necessitatibus dolore mollitia neque.</p>
        </div>
        </div>
    )
}
