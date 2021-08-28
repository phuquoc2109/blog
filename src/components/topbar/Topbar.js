import React, { useEffect, useState } from 'react'
import './topbar.scss'
import Avatar from '@material-ui/core/Avatar';
import {Link} from'react-router-dom'

export default function Topbar() {
    const [checkActiveNav, setCheckActiveNav] = useState(true);
    const [checkScroll, setCheckScroll] = useState(false)

    const handleScroll = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setCheckScroll(true);
        } else{
            setCheckScroll(false)
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const user = false

    return (
        <div className={checkScroll ? 'top shrink' : 'top'}>
            <div className="top__left">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-pinterest-square"></i>
                <i className="fab fa-instagram-square"></i>
            </div>
            <div className="top__center">
                <ul className={checkActiveNav ? 'top__center__list' : 'top__center__list__active'}>
                    <Link to="/" className='link'><li className="top__center__list__item">HOME</li></Link>
                    <Link to="/about" className='link'><li className="top__center__list__item">ABOUT</li></Link>
                    <Link to="/contact" className='link'><li className="top__center__list__item">CONTACT</li></Link>
                    <Link to="/write" className='link'><li className="top__center__list__item">WRITE</li></Link>
                    <Link to="/logout" className='link'><li className="top__center__list__item">{user? 'LOGOUT' : ''}</li></Link>
                </ul>
            </div>
            <div className="top__right">
                {
                    user ? (<Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2829067/pexels-photo-2829067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />):
                    ( <>
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/register">Register</Link>
                    </>)
                }
                <i className="fas fa-search"></i>
            </div>
            <div onClick={() => setCheckActiveNav(!checkActiveNav)} className="top__toggle">
                {
                    checkActiveNav ? 
                    <i className="fas fa-bars"></i>
                    :
                    <i className="fas fa-times"></i>
                }
            </div>
        </div>
    )
}
