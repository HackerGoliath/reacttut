import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    return (
        <>
            <h1>Contact Page</h1>
            {/* <button onClick={() => navigate("/")}>Go to Home Page</button> */}
            <button onClick={goToHome}>Go to Home Page</button>
        </>

    )
}

export default Contact