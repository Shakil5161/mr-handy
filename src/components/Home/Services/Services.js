import React, { useEffect, useState } from 'react';
import Residential from '../../../img/residential-cleaning.jpg'
import Kitchen from '../../../img/kitchen-cleaning.jpg'
import Property from '../../../img/property-cleaning.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
    const [serviceData, setServiceData] = useState([])
    // const serviceData = [
    //     {
    //         title:"Residential Cleaning",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet",
    //         img: Residential,
    //         price:"120",
    //     },
    //     {
    //         title:"Kitchen Cleaning",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet",
    //         img: Kitchen,
    //         price:"80"
    //     },
    //     {
    //         title:"Property Cleaning",
    //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet",
    //         img: Property,
    //         price:"560"
    //     }
    // ]
    useEffect(() => {
        fetch('https://shielded-falls-91732.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    console.log(serviceData)
    return (
        <section>
            <div style={{ padding: "120px 0px 10px" }} className="container">
                <h2 style={{ paddingBottom: "50px" }} className="text-center my-heading">We Provide Our Best Cleaning <br /> Services For You</h2>
                <div className="row">

                    {
                        serviceData.length > 0 ? serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                            :
                            <div className="text-center m-auto">
                                <div class="spinner-grow text-warning" role="status">
                                    <span class="visually-hidden"></span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;