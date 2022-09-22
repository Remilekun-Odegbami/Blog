import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import './singlePost.css';
import Messages from '../message/Messages';
import { Spinner } from 'react-bootstrap';

export default function SinglePost() {
    const { user, isFetching } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const [messages, setMessage] = useState("")
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false);

    const postFolder = "http://localhost:5000/Media/"

    useEffect(() => {
        const singlePost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path)
            console.log('res', res)
            setPost(res.data)
            // to set the title and desc in the update mode
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        singlePost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, { data: { username: user.others.username } });
            navigate("/");
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, { username: user.others.username, title, desc });
            setUpdateMode(false);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    return (
        <div className='singlePost'>
            <div className="container">

                <div className="row">
                    {post.image && (
                        <img src={postFolder + post.image} alt={post.name} className='img-fluid' />
                    )}
                    {messages && <Messages messages={messages} />}
                    {updateMode ? <input type="text" value={title} className="single-header-edit" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (

                        <div className="head">
                            <h4 className="single-header">{title}</h4>
                            {post.username === user?.others.username && <div className="icons">
                                <i className="fa fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="fa fa-trash" onClick={handleDelete}></i>
                            </div>}
                        </div>
                    )}
                    <div className="editor">
                        <h5 className="author">Author: {""}
                            <Link to={`/?user=${post.username}`}>
                                <b>{post.username}</b>
                            </Link>
                        </h5>
                        <div className="date">{new Date(post.createdAt).toDateString()}</div>
                    </div>
                    {updateMode ? (<textarea cols="10" rows="10" className='article-edit' value={desc} onChange={(e) => setDesc(e.target.value)} />) : (
                        <div className="article">
                            <p className="text">{desc} </p>
                        </div>
                    )}
                    {updateMode ? (
                        <button type='submit' className="btn btn-success" onClick={handleUpdate}>Update </button>
                    ) : (" ")}
                </div>
            </div>
        </div >
    )
}


