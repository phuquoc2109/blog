import React from 'react'
import './sidebar.scss'

export default function Sidebar() {
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
                    <li className="sidebar__item__list__category">Life</li>
                    <li className="sidebar__item__list__category">Music</li>
                    <li className="sidebar__item__list__category">Style</li>
                    <li className="sidebar__item__list__category">Sport</li>
                    <li className="sidebar__item__list__category">Tech</li>
                    <li className="sidebar__item__list__category">Cinema</li>
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
