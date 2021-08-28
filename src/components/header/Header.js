import React from 'react';
import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="header__title">
                <span className="header__title__sm">Dương Phú Quốc</span>
                <span className="header__title__lg">Blog</span>
            </div>
            <img className="header__image" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
