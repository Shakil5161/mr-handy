import React, { useContext, useEffect, useState } from 'react';
// import context from 'react-bootstrap/esm/AccordionContext';
import { UserContext } from '../../../App';
import DataTable from '../DataTable/DataTable';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://shielded-falls-91732.herokuapp.com/customerBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    // useEffect(() => {
    //     fetch('https://shielded-falls-91732.herokuapp.com/allBooking')
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [])


    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <DataTable bookings={bookings}></DataTable>
            </div>
        </section>
    );
};

export default Dashboard;