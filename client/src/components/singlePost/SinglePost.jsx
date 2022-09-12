import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './singlePost.css';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const singlePost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path)
            setPost(res.data)
        }
        singlePost()
    }, [path])


    return (
        <div className='singlePost'>
            <div className="row">
                {post.image && (
                    <img src={post.image} alt={post.name} className='img-fluid' />
                )}
                <div className="head">
                    <h4 className="single-header">{post.title}</h4>
                    <div className="icons">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
                <div className="editor">
                    <h5 className="author">Author: {""}
                        <Link to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </h5>
                    <div className="date">{new Date(post.createdAt).toDateString()}</div>
                </div>
                <div className="article">
                    <p className="text">{post.desc} </p>
                </div>
            </div>
        </div>
    )
}
