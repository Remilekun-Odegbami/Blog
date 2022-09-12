import React from 'react';
import Header from '../../components/header/Header';
import './home.css';
import Sidebar from './../../components/sidebar/Sidebar';
import Posts from './../../components/posts/Posts';
import Footer from './../../components/footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <>
            <Header />
            <div className='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <Posts posts={posts} />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
