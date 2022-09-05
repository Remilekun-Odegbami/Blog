import React from 'react';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
    return (
        <div className='settings'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="heading">
                            <h1 className="title">Update your account</h1>
                            <span className='delete-acc'>delete account</span>
                        </div>
                        <div className="row">
                            <form className='settings-form'>
                                <div className="settings-form-group">
                                    <span className="update">Update my profile picture</span>
                                    <div className="mb-3 profile">
                                        <img src="https://images.pexels.com/photos/6633446/pexels-photo-6633446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid' />
                                        <label htmlFor="imageInput">
                                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                        </label>
                                        <input type="file" className="d-none" id="imageInput" accept="image/*" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className='form-label'>Username</label>
                                        <input type="text" className=" form-control name" placeholder='Enter Username' name="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className='form-label'>Email</label>
                                        <input type="email" className=" form-control email" placeholder='Enter email address' name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className='form-label'>Password</label>
                                        <input type="password" className=" form-control password" placeholder='Enter password' name="password" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success update-btn">Update</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
