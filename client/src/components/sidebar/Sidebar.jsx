import React from 'react';
import './sidebar.css';
import SideImg from './../../Media/Odegbami Remilekun.jpeg';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="container">
                <div className="row">
                    <div className="sidebar-item">
                        <h3 className="title"> About me</h3>
                        <img src={SideImg} alt="" className='img-fluid' />
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi molestiae odio, excepturi odit asperiores.</p>
                    </div>
                    <div className="sidebar-item">
                        <h3 className="title">Categories</h3>
                        <ul className="sidebar-list row">
                            <div className="col-6">
                                <a href=""><li className="sidebar-list-item">Life</li> </a>
                                <a href=""><li className="sidebar-list-item">Music</li> </a>
                                <a href=""><li className="sidebar-list-item">Style</li> </a>
                                <a href=""><li className="sidebar-list-item">Sport</li> </a>
                            </div>
                            <div className="col-6">
                                <a href=""><li className="sidebar-list-item">Tech</li> </a>
                                <a href=""><li className="sidebar-list-item">Cinema</li> </a>
                                <a href=""><li className="sidebar-list-item">Family</li> </a>
                                <a href=""><li className="sidebar-list-item">Food</li> </a>
                            </div>
                        </ul>
                    </div>
                    <div className="sidebar-item">
                        <h3 className="title">Follow Us</h3>
                        <ul className="sidebar-socials col">
                            <a href="https://twitter.com/Rem_dev22?t=iGkHQywSS5v2ROOH6k3-pg&s=08" className="twitter sidebar-icon"
                            > <i className="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/remilekun-odegbami" className="linkedin"
                            ><i className="fa fa-linkedin sidebar-icon"></i></a>
                            <a href="https://github.com/Remilekun-Odegbami" className="github sidebar-icon"><i className="fa fa-github"></i></a>
                            <a href="mailto:remdev22@gmail.com" className="mail sidebar-icon"><i className="fa fa-envelope"></i></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
