import React from 'react';
import Header from '../../components/header/Header';
import './home.css';
import Sidebar from './../../components/sidebar/Sidebar';
import Posts from './../../components/posts/Posts';
import Footer from './../../components/footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <Posts />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
