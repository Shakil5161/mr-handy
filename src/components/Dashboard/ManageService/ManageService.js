import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [allService, setAllService] = useState([])
    const [deleteId, setDeleteId] = useState('')
    useEffect(() => {
        fetch('https://shielded-falls-91732.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, []);
    const handleDelete = (id) =>{
        setDeleteId(id)
    }
    console.log('deleteId',deleteId)
    useEffect(()=>{
        fetch(`https://shielded-falls-91732.herokuapp.com/deleteService/${deleteId}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data=>console.log(data))
    },[deleteId])
    return (
        <section class="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Img</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Description</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* onClick={(event) => deleteHandler(event, _id)} */}
                        {
                            allService.map((service, index) =>
                                <tr>
                                    <td className="text-info">{index + 1}</td>
                                    <td><img style={{ borderRadius: '10px' }} height="30px" src={`data:image/png;base64,${service.image.img}`} alt="" srcset="" /></td>
                                    <td>{service.serviceName}</td>
                                    <td>{service.description.length < 20 ?
                                        service.description : service.description.substring(0, 20)
                                    }<b>...</b></td>
                                    <td>{service.price}</td>
                                    <td>
                                        <i onClick={()=>handleDelete(service._id)} style={{ cursor: 'pointer' }} class="fas fa-trash"></i>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageService;