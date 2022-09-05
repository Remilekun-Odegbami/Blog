import React from 'react';
import './posts.css'
import Post from './../post/Post';

export default function Posts() {
    return (
        <div className='posts'>
            <div className="container">
                <div className="row">
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}
