import React, { useState } from 'react'

const Content = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    const handleChange = (e) => {
        const { fName, lName } = e.target
        setFullName((prevValue) => {
            console.log(prevValue);
        });
    }

    return (
        <>
            <div className='container my-5'>
                <div className="input-group">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" name='fName' onChange={handleChange} value={fullName.fName} aria-label="First name" className="form-control" />
                    <input type="text" name='lName' onChange={handleChange} value={fullName.lName} aria-label="Last name" className="form-control" />
                </div>
                <h2>{fullName.fName}</h2>
                <h3>{fullName.lName}</h3>
                <button className='btn btn-success my-2'>Submit</button>
            </div>
        </>
    )
}

export default Content