import React from 'react';
import Footer from '../../components/footer/Footer';
import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <div className='container'>
                <div className="row">
                    <img src="https://images.pexels.com/photos/6633446/pexels-photo-6633446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='image' />
                    <form className='write-form'>
                        <div className="write-form-group">
                            <div className="mb-3">
                                <label htmlFor="fileInput">
                                    <i className="fa fa-cloud"></i>
                                </label>
                                <input type="file" className="d-none" id="fileInput" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="title" placeholder='Title' autoFocus={true} name="blog-heading" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea name="msg" id="msg" className='msg' cols="50" rows="10" placeholder='Share your thoughts'></textarea>
                        </div>
                        <button type="submit" className="btn btn-success post">Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
