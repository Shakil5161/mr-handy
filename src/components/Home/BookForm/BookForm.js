import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import NavBar from '../../Shared/NavBar/NavBar';
import Stripe from '../Stripe/Stripe';
import './BookForm.css'


const BookForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {bookingId} = useParams()
    const [pay, setPay] = useState(false)
    const [address, setAddress] = useState({})
    const [service, setService] = useState({})
    const payService ={
        serviceName: service.serviceName,
        price: service.price,
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        // console.log(data)
        setAddress(data)
        setPay(true)
    };
    console.log(bookingId)
    useEffect(() =>{
        fetch('https://shielded-falls-91732.herokuapp.com/booking/'+bookingId)
        .then(res => res.json())
        .then(result =>setService(result))
    },[])
    return (
        <div class="container-fluid ">
            <NavBar></NavBar>
            <div class="row booking-form-bg d-flex justify-content-center">
                <div class="col-sm-12">
                    <div class="card booking-form mx-auto">
                        <div className="d-flex  justify-content-between">
                            
                            <h5>{service.serviceName}</h5>
                            <h4 style={{color: '#F7C355'}}>{service.price}$</h4>
                        </div>
                        <div style={{ display: pay ? 'none' : 'block' }}>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group ">
                                    <p class="text-warning mb-0">Name</p>
                                    {/* <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="w-100"/> */}

                                    <input type="text" defaultValue={loggedInUser.name} {...register("name", { required: true })} name="name" placeholder="Your Name" className="w-100" />
                                    {errors.name && <span className="text-danger">This field is required</span>}

                                </div>

                                <div className="form-group ">
                                    <p class="text-warning mb-0">Email</p>
                                    <input type="email" defaultValue={loggedInUser.email}  {...register("email", { required: true })} name="email" placeholder="Email" className="w-100" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group ">
                                    <p class="text-warning mb-0">Phone</p>
                                    <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="w-100" />
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group ">
                                    <p class="text-warning mb-0">Address</p>
                                    <input type="text" {...register("address", { required: true })} name="address" placeholder="Address" className="w-100" />
                                    {errors.address && <span className="text-danger">This field is required</span>}
                                </div>
                                <div class="form-group">
                                <p class="text-warning mb-0">Date and time</p>
                                    
                                        <input class="w-100" name="bookOn" type="datetime-local"  {...register("bookOn", { required: true })}
                                         id="example-datetime-local-input" />
                                    
                                </div>
                                <div className="form-group text-right  my-btn">
                                    <button type="submit" className="btn btn-primary border-0">BOOK</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ display: pay ? 'block' : 'none' }}>

                            <Stripe service={payService} address={address}></Stripe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookForm;