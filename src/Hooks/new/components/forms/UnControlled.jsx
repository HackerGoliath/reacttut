import React, { useState, useRef } from 'react'

const UnControlled = () => {
    const [show, setShow] = useState(false)

    // Its like a useState only and its preserve the value. No rerender
    const luckyname = useRef(null)
    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;
        name === "" ? alert("Plzz fill the data") : setShow(true)
    }

    return (
        <div className='bg-info p-5 rounded text-dark'>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyname" className='mx-5 fs-3 fw-bold'>Enter your lucky name</label>
                    <input className='py-2 px-5' type="text" id="luckyname" ref={luckyname} />
                </div>
                <div className='d-grid my-4'>
                    <button className='btn btn-danger fw-bold fs-5'>Submit</button>
                </div>
            </form>
            <p className='bg-warning p-2 fw-bold text-xl-center'>{show ? `Your lucky name is : ${luckyname.current.value}` : ""}</p>
        </div>
    )
}

export default UnControlled