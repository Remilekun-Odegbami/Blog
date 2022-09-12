import React from 'react';
import './posts.css'
import Post from './../post/Post';

export default function Posts({ posts }) {
    return (
        <div className='posts'>
            <div className="row">
                {posts.map(post => (
                    <div className="col-md-6" key={post._id} >
                        <Post post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}
