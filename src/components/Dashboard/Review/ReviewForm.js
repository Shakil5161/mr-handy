import React, { useState } from 'react';

const ReviewForm = () => {
    const [review,  setReview] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleFile = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }
    console.log(review)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('description', review.description)
        formData.append('city', review.city)
        console.log(formData)

        fetch('https://shielded-falls-91732.herokuapp.com/customerReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    alert('review added successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="col-md-10 p-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" name="name" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input onBlur={handleBlur} type="text" name="description" className="form-control" id="exampleInputEmail1" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input onBlur={handleBlur} type="text" name="city" className="form-control" id="exampleInputEmail1" required/>
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
    );
};

export default ReviewForm;