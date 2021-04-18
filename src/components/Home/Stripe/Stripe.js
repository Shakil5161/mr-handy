import React from 'react';
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import SplitForm from './SplitForm';

const stripePromise = loadStripe('pk_test_51IeG5AGU6Zj3Vi3HA6i6Ov0TRFfBmmGYCLwJvosnko4oxQ3kZN2cXcO59tTppiYpX9gEgP2j6ixL9RnVL4rFKnK600I0NVbsdE');

const Stripe = ({address, service}) => {
    // const address = props.address;
    // const service = props.service;
    console.log('address',address)
    console.log('service',service)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SplitForm service={service} address={address}></SplitForm>
            </Elements>
            {/* <p class="heading">PAYMENT DETAILS</p>
                            <form class="card-details ">
                                <div class="form-group mb-0 booking-img">
                                    <p class="text-warning mb-0">Card Number</p> <input type="text" name="card-num" placeholder="1234 5678 9012 3457" size="17" id="cno" minlength="19" maxlength="19" /> <img src="https://img.icons8.com/color/48/000000/visa.png" width="64px" height="60px" />
                                </div>
                                <div class="form-group">
                                    <p class="text-warning mb-0">Cardholder's Name</p> <input type="text" name="name" placeholder="Name" size="17" />
                                </div>
                                <div class="form-group pt-2">
                                    <div class="row d-flex">
                                        <div class="col-sm-4">
                                            <p class="text-warning mb-0">Expiration</p> <input type="text" name="exp" placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7" />
                                        </div>
                                        <div class="col-sm-3">
                                            <p class="text-warning mb-0">Cvv</p> <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                        </div>
                                        <div class="col-sm-5 pt-0 booking-btn"> <button type="button" class="btn btn-primary"><i class="fas fa-arrow-right px-3 py-2"></i></button> </div>
                                    </div>
                                </div>
                            </form> */}
        </div>
    );
};

export default Stripe;