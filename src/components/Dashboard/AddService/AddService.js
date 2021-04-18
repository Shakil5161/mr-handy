import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleFile = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceName', service.serviceName)
        formData.append('description', service.description)
        formData.append('price', service.price)
        console.log(formData)

        fetch('https://shielded-falls-91732.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    alert('service added successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    console.log(service)
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" name="serviceName" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input onBlur={handleBlur} type="text" name="description" className="form-control" id="exampleInputEmail1" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input onBlur={handleBlur} type="number" name="price" className="form-control" id="exampleInputEmail1" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload File</label>
                        <input onChange={handleFile} type="file" className="form-control w-25 p-1" id="exampleInputPassword1" required/>
                    </div>
                    <div className="my-btn">
                        <button type="submit" className="btn btn-primary border-0">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddService;