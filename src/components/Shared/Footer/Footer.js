import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="container-fluid footer-bg">
            <div style={{ paddingTop: '90px' }} className=" container row">
                <div className="col-md-3">
                    <h5 style={{ color: '#F7C355', paddingBottom: '20px' }}>Categories</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">House Cleaning</a></li>
                            <li><a href="#">Office Cleaning</a></li>
                            <li><a href="#">Carpet Cleaning</a></li>
                            <li><a href="#">Glass Cleaning</a></li>
                            <li><a href="#">Check Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#F7C355', paddingBottom: '20px' }}>Useful link</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">Store Location</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Emergency</a></li>
                            <li><a href="#">Make Request</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#F7C355', paddingBottom: '20px' }}>Information</h5>
                    <div className="footer-link ">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Term Condition</a></li>
                            <li><a href="#">Free Voucher</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 style={{ color: '#F7C355', paddingBottom: '20px' }}>Our Address</h5>
                    <div className="footer-link ">
                        <address className="text-white">
                            Example.com <br />
                                    Box 564, Disneyland <br />
                                        USA
                       </address>
                        <div style={{ padding: '30px 0px', color: '#1CC7C1' }} >
                            <span className="footer-icon"><FontAwesomeIcon className="icon" icon={faFacebook} /></span>
                            <span className="footer-icon"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            <span className="footer-icon"><FontAwesomeIcon icon={faTwitter} /></span>
                        </div>
                        <div className="footer-btn">
                            <span className="text-white">Call Now</span><br />
                            <button className="btn btn-primary">+2485014</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5 pb-3">
            <small>Copyright {new Date().getFullYear()}.<span style={{color: '#F7C355',fontSize:'20px'}}>shakilahmed</span>5161@gmail.com All Rights Reserved. Dhaka, Bangladesh.</small>
        </div>
            {/* <div className="pt-5 pb-3 text-center">
                <small>Copyright {new Date().getFullYear()} All Rights Reserved</small>
            </div> */}
        </footer>
    );
};

export default Footer;