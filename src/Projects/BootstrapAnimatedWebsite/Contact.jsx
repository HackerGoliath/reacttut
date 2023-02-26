import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        // console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${data.fullname}, phone: ${data.phone}, email: ${data.email}, Message: ${data.msg}`);
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
                <div className='container contact_div'>
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={handleChange} placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input type="phone" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={handleChange} placeholder="Mobile Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={handleChange} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={handleChange} rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact