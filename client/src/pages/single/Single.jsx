import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.css'
import SinglePost from './../../components/singlePost/SinglePost';
import Footer from './../../components/footer/Footer';

export default function Single() {
  return (
    <div className='single-post'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <SinglePost />
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
