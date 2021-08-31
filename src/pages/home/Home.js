import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

export default function Home() {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();


    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:5000/api/posts'+search);
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts();
    }, [search])
    console.log(posts)
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
