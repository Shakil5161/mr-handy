import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import BookForm from '../BookForm/BookForm';

const ServiceCard = ({ service }) => {
    const [modalShow, setModalShow] = useState(false);
    // const {id} = useParams();
    // console.log(id);
    return (
        <div className="col-sm-4 gy-5">
            <div className="col-sm-12 pb-5">
                <Card className="border-0 shadow bg-body rounded ">
                {/* <img src={`service:image/png;base64,${service.image}`}/> */}
                    <Card.Img height="200px" variant="top" src={`data:image/png;base64,${service.image.img}`} />
                    <Card.Body>
                        <Card.Title>{service.serviceName}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <div className="my-btn d-flex justify-content-between">
                            <Link to={"/booking/"+service._id}><Button>Book Now</Button></Link>
                            <Card.Title className="my-color-y pt-1">${service.price}</Card.Title>
                        </div>
                        {/* <BookForm show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ServiceCard;