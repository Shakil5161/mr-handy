import React, { useEffect, useState } from 'react';
import './ClientReview.css'
import ClientReviewCard from '../ClientReviewCard.js/ClientReviewCard';
const ClientReview = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://shielded-falls-91732.herokuapp.com/allReview')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    return (
        <section className="review-bg" >
            <h2 style={{ paddingTop: '100px' }} className="my-color-b text-center my-heading">Happy Client Says About <br /> Our Company</h2>
            <div className="container pt-5 pb-5  row d-flex justify-content-center">
                {
                    reviewData.map(review => <ClientReviewCard review={review}></ClientReviewCard>)
                }

            </div>
        </section>
    );
};

export default ClientReview;