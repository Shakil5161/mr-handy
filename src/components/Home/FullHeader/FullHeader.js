import React from 'react';
import Header from '../Header/Header';
import NavBar from '../../Shared/NavBar/NavBar';
import './FullHeader.css'
const FullHeader = () => {
    return (
        <div className="header-bg">
            <NavBar></NavBar>
            <Header></Header>
        </div>
    );
};

export default FullHeader;