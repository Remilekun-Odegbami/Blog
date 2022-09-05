import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className='footer-header'>My Blog</h1>
                        <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque repudiandae corrupti aliquam voluptates! Esse eligendi incidunt blanditiis facere ea aut culpa molestiae facilis non? Expedita quibusdam cumque consequatur quo.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 offices">
                        <h3 className='footer-sub-header'>Offices</h3>
                        <ul className='row'>
                            <div className="col-6">
                                <li className="footer-links"><a href="#">Jos</a></li>
                                <li className="footer-links"><a href="#">Abuja</a></li>
                                <li className="footer-links"><a href="#">PortHarcourt</a></li>
                            </div>
                            <div className="col-6">
                                <li className="footer-links"><a href="#">Lagos</a></li>
                                <li className="footer-links"><a href="#">Oyo</a></li>
                                <li className="footer-links"><a href="#">Cross River</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 contact">
                        <h3 className='footer-sub-header'>Call Us</h3>
                        <div className="col-12">
                            <i className="fa fa-map-marker"></i> {""}
                            200 South Zone, Abuja, Nigeria.
                        </div>
                        <div className="col-12">
                            <i className="fa fa-phone"></i> {""}
                            +234567890981
                        </div>
                        <div className="col-12">
                            <i className="fa fa-envelope"></i> {""}
                            info@myblog.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
