import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <section class="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <ReviewForm></ReviewForm>
            </div>
        </section>
    );
};

export default Review;