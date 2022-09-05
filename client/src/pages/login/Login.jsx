import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className='container-fluid login'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <form className='login-form'>
                        <div className="login-form-group">
                            <h1 className="greet">Welcome Back</h1>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email" className=" form-control email" placeholder='Enter email address' name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input type="password" className=" form-control password" placeholder='Enter password' name="password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success login-btn">Login</button>
                        <h5>Don't have an account? <a href="" className='action'>Sign up now</a></h5>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid' />
                </div>
            </div>

        </div>
    )
}
