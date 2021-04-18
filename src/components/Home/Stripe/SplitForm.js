
import React, { useMemo, useState } from "react";
import './Stripe.css'
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";

const useOptions = () => {
    // const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: "16px",
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};
const SplitForm = ({address, service}) => {
    // const address = props.address;
    // const [payment, setPayment] = useState({})

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        const paymentInfo  = {...address, ...service, payment_id: payload.paymentMethod.id, date: new Date()}
        // setPayment(paymentInfo);
        console.log(paymentInfo);

        fetch('https://shielded-falls-91732.herokuapp.com/orderBooking',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paymentInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data){
                console.log(data);
                alert('Your order has been successful')
                history.push('/')
            }
        });
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card number
          <CardNumberElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label> <br />
            <label>
                Expiration date
          <CardExpiryElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label><br />
            <label>
                CVC
          <CardCvcElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label><br />
            <div className="my-btn">
                <button className="btn text-white" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default SplitForm;