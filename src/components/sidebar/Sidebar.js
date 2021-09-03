import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.scss'

export default function Sidebar() {
    const [cats, setCat] = useState([]);
    const PF = "http://localhost:5000/images/";
    const srcImg = "1630465489114c41a560464a697f8ceb7.jpg"; // In server

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCat(res.data);
        }
        getCats();
    }, [])

    return (
        <div className="sidebar sidebar__sticky">
            <div className="sidebar__item">
                <span className="sidebar__item__title">ABOUT ME</span>
                <img className="sidebar__item__img" src={ PF + srcImg} alt="" />
                <p>My name is Duong Phu Quoc, this is my blog. Here, there are blogs about my life. You can also write your blog here if you want. <p><b>Best regards!</b></p></p>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__item__title">CATEGORIES</span>
                <ul className="sidebar__item__list">
                    {
                        cats.map((cat,index) => (
                            <Link to={`/?cat=${cat.name}`} key={index} className="link"><li className="sidebar__item__list__category">{cat.name}</li></Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__item__title">FOLLOW US</span>
                <div className="sidebar__item__social">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
