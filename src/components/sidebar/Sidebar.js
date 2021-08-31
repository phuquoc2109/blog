import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.scss'

export default function Sidebar() {
    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories");
            setCat(res.data);
        }
        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__item__title">ABOUT ME</span>
                <img className="sidebar__item__img" src="https://images.pexels.com/photos/1386602/pexels-photo-1386602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptates, harum ea reiciendis, tempore quasi blanditiis ut aperiam est nobis itaque aut quos velit cumque molestias neque repellendus omnis delectus fugiat nesciunt, exercitationem inventore consectetur porro! Facilis soluta, officiis itaque natus aut, ipsa repellendus, officia animi necessitatibus quia saepe quod.</p>
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
