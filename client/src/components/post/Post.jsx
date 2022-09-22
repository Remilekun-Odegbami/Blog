import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
    const postFolder = "http://localhost:5000/Media/"
    return (
        <div className="post">
            <div className="col-12">
                {post.image && (
                    <img src={postFolder + post.image} alt={post.name} className='img-fluid' />
                )}
                <div className="post-info">
                    <div className="post-categories">
                        {
                            post.categories.map((cats) => {
                                <span className="post-cat"><a href="">{cats.name}</a></span>
                            })
                        }
                        {/* <span className="post-cat">| </span>
                        <span className="post-cat"><a href="">Life</a></span> */}
                    </div>
                    <h5 className="post-header">
                        <Link to={`/post/${post._id}`}>{post.title}</Link> </h5>
                    <p className="time"> {new Date(post.createdAt).toDateString()} </p>
                </div>
                <p className="post-text"> {post.desc} </p>
            </div>
        </div>
    )
}
