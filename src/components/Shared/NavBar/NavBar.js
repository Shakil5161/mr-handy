import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.svg'
const NavBar = () => {
    return (
        <Navbar className="container-fluid" bg="white" expand="lg">
            <div className="container">
            <Navbar.Brand href="#home"><img width="200px" src={Logo} alt="" srcset=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto my-nav">
                    <Link className="pr-5 pt-2" to="/home">Home</Link>
                    <Link className="pr-5 pt-2" to="link">Services</Link>
                    <Link className="pr-5 pt-2" to="link">Blog</Link>
                    <Link className="pr-5 pt-2" to="link">Contact US</Link>
                    <Link className="pr-5 pt-2" to="/dashboard">Dashboard</Link>
                    {/* <div className="my-btn"><Button >Login</Button></div> */}
                    <div className="my-btn"><Link to="/login"><button className="btn text-white">Login</button></Link></div>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;