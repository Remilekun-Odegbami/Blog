import React from 'react';
import './register.css';

export default function Register() {
    return (
        <div className='container register'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <form className='register-form'>
                        <div className="register-form-group">
                            <h1 className="greet">Welcome</h1>
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label'>First Name</label>
                                <input type="text" className=" form-control" placeholder='First Name' name="firstName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label'>Last Name</label>
                                <input type="text" className=" form-control" placeholder='Last Name' name="lastName" />
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
                        <button type="submit" className="btn btn-success register-btn">Register</button>
                        <h5>Have an account? <a href="" className='action'>Login</a></h5>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" className='img-fluid' />
                </div>
            </div>

        </div>
    )
}
