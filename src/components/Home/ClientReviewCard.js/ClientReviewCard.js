import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import bgImg from '../../../img/review-bg.png'
import Quota from '../../../img/quote.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
const ClientReviewCard = ({ review }) => {
    return (


        <div className="col-sm-6 pb-3">
            <div style={{ borderRadius: '10px' }} className="card shadow p-3 mb-5 bg-body rounded border-0">
                <div className="card-body p-0 row d-flex ">
                    <div className="col-sm-4 pr-0">
                        <img style={{ borderRadius: '10px' }} height="100px" src={`data:image/png;base64,${review.image.img}`} alt="" srcset="" />
                    </div>
                    <div className="col-sm-8 pl-0 review-text">
                        <FontAwesomeIcon style={{ color: '#F7C355' }} icon={faStar} />
                        <FontAwesomeIcon style={{ color: '#F7C355' }} icon={faStar} />
                        <FontAwesomeIcon style={{ color: '#F7C355' }} icon={faStar} />
                        <FontAwesomeIcon style={{ color: '#F7C355' }} icon={faStar} />
                        <FontAwesomeIcon style={{ color: '#F7C355' }} icon={faStar} />
                        <p className="text-secondary">{review.description}</p>
                        <div className="row d-flex">
                            <div className="col-sm-8 ">
                                <h6>{review.name}</h6>
                                <small className="blockquote-footer">{review.city}</small>
                            </div>
                            <div className="col-sm-4 text-right">
                                <img style={{opacity:'.8'}} height="30px" src={Quota} alt="" srcset=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <Carousel style={{ height: '300px', width: '100%', textAlign: 'center' }}>

        //     <Carousel.Item interval={1000}>
        //         <img
        //             className="d-block w-100"
        //             height="200px"
        //             src={review.img}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>{review.name}</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     </Carousel>



    );
};

export default ClientReviewCard;