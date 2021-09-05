import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../Config';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

export default function Home() {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();


    const fetchPosts = async () => {
        const res = await axiosInstance.get('/posts'+search);
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts();
    }, [search])

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export const PF = "https://blog-dpq.herokuapp.com/images/";
