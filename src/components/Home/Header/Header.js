import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <section className="section">
            <div className="container header-content">
                <p className="text-white">Get Amazing Home Cleaning Experience</p>
                <h1>Best Cleaning Service <br/> Make Difference</h1>
                <div className="my-btn"><Button> Read More</Button></div>
            </div>
        </section>
    );
};

export default Header;