import { useState } from 'react';
import { Spinner } from "react-bootstrap";
import Footer from '../../components/footer/Footer';
import './write.css'
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import Messages from '../../components/message/Messages';
import { useNavigate } from 'react-router-dom';

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context)
    const navigate = useNavigate();


    const handlePost = async (e) => {
        e.preventDefault()
        const newPost = {
            username: user.others.username,
            title,
            desc
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data)
            } catch (error) {
                setMessage(error.data.message);
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/posts", newPost)
            navigate("/post/" + res.data.savedPost._id)
        } catch (error) {
            setMessage(error.data.message);
        }
    }
    return (
        <div className='write'>
            <div className='container'>
                <div className="row">
                    {file && (
                        <img src={URL.createObjectURL(file)} alt="" className='image' />
                    )}

                    {message && <Messages messages={message} className="w-100 text-success" />}
                    <form className='write-form' onSubmit={handlePost}>
                        <div className="write-form-group">
                            <div className="mb-3">
                                <label htmlFor="fileInput">
                                    <i className="fa fa-cloud"></i>
                                </label>
                                <input type="file" className="d-none" id="fileInput"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="title" placeholder='Title' autoFocus={true} name="blog-heading" required onChange={e => setTitle(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea name="desc" id="desc" className='desc' cols="50" rows="10" placeholder='Share your thoughts' required onChange={e => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success post" >Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}


