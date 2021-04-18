import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import FullHeader from '../FullHeader/FullHeader';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <FullHeader></FullHeader>
            <Services></Services>
            <ClientReview></ClientReview>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;