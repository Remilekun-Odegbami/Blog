import React from 'react';
import './header.css';


export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="header-titles">
                        <h2 className="sub-title">React Js and Node Js</h2>
                        <h3 className="main-title">Blog</h3>
                    </div>
                    <img src="https://images.pexels.com/photos/6633446/pexels-photo-6633446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="header-img" />
                </div>
            </div>
        </div>
    )
}
