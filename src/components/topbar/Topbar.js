import Avatar from '@material-ui/core/Avatar';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../../context/Actions';
import { Context } from '../../context/Context';
import { PF } from '../../pages/home/Home';
import './topbar.scss';

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

    const handleSelect  = () => {
        setCheckActiveNav(true)
    }

    const {user, dispatch} = useContext(Context)
    const handleLogout = () =>{
        dispatch(Logout())
        // history.push("/login")
        window.location.replace("/login");
    }
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
                    <Link to="/" className='link'><li onClick={handleSelect} className={`top__center__list__item`}>HOME</li></Link>
                    <Link to="/about" className='link'><li onClick={handleSelect} className={`top__center__list__item`}>ABOUT</li></Link>
                    <Link to="/contact" className='link'><li onClick={handleSelect} className={`top__center__list__item`}>CONTACT</li></Link>
                    <Link to="/write" className='link'><li onClick={handleSelect} className={`top__center__list__item`}>WRITE</li></Link>
                    <li onClick={handleLogout} className={`top__center__list__item`}  style={{cursor:'pointer', color:'darkgoldenrod', fontWeight:'bold'}} >{user? 'LOGOUT' : ''}</li>
                </ul>
            </div>
            <div className="top__right">
                {
                    user ? (<Link to="/settings"><Avatar alt="Cindy Baker" src={user.profilePic ? PF +user.profilePic : null} /></Link>):
                    ( <>
                        <Link style={{marginRight:'10px'}} className="link top__center__list__item" to="/login">LOGIN</Link>
                        <Link className="link top__center__list__item" to="/register">REGISTER</Link>
                    </>)
                }
                {/* <i style={{marginRight:'10px'}} className="fas fa-search"></i> */}
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
