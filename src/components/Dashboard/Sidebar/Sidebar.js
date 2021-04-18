import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faFileAlt, faPlus, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import context from 'react-bootstrap/esm/AccordionContext';
import { UserContext } from '../../../App';
import firebaseConfig from '../../Login/firebase.config';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email)
    const [isAdmin, setIsAdmin] = useState(false)
    const handleLogOut = () => {
        firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
        console.log('click')
        firebase.auth().signOut().then(() => {
            sessionStorage.removeItem('token')
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        fetch('https://shielded-falls-91732.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div className="text-center pb-3">
                    <img style={{ borderRadius: '50%', height: "60px" }} src={loggedInUser.img} alt="" srcset="" />
                </div>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentsDollar} /><span>Review</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
            <div onClick={handleLogOut} style={{cursor: 'pointer'}}>
                <a href="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <a>Logout</a></a>
            </div>
        </div>
    );
};

export default Sidebar;