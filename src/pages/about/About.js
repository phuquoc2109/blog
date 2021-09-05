import React from 'react';
import './about.scss'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { PF } from '../home/Home';

export default function About() {

    
    const srcImg = "1630465489114c41a560464a697f8ceb7.jpg"; // In server

    return (
        <div className="ab">
        <div className="about">
             <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumbs">
                    <Link className="link" to="/" >Trang chủ</Link>
                    <Typography color="primary">About</Typography>
            </Breadcrumbs>
            <div className="about__intro">
                <p>Điều quý giá nhất trên đời là tạo ra di sản. Mỗi người có cách để lại di sản riêng biệt. Blog là một không gian nhỏ trên mạng giúp mỗi người để lại di sản của mình cho quá khứ, hiện tại và tương lai.</p>
                <p>Mình là Dương Phú Quốc sinh năm 1999 tại Quảng Nam</p>
            </div>
            <img className="about__img" src={PF + srcImg} alt="" />
            <div className="about__info">
                <div className="about__info__left">
                    <h2>Duong Phu Quoc</h2>
                    <hr />
                    <div>
                        <p>Adress: Tôn Thất Tùng, Nam Phước, Duy Xuyên, Quảng Nam</p>
                        <p>Phone: 0916 904 140</p>
                        <p>Email: quocduongphu@gmail.com</p>
                    </div>
                </div>
                <hr style={{width: '1px', height: '100px' }} />
                <div className="about__info__right">
                    <h2>Social Network</h2>
                    <hr />
                    <div>
                        <a target="_blank" href="https://www.facebook.com/phu.quoocs/"><i className="fab fa-facebook-square"></i></a>
                        <a target="_blank" href="https://www.instagram.com/__phuquoc/"><i className="fab fa-instagram-square"></i></a>
                        <a target="_blank" href="https://twitter.com/quoc14391560"><i className="fab fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar />
        </div>
    )
}
