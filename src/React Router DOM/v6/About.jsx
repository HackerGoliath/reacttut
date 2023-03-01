import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact")
    }
    return (
        <>
            <h1>About Page</h1>
            {/* <button onClick={() => navigate("/contact")}>Go to Contact Page</button> */}
            <button onClick={() => goToContact()}>Go to Contact Page</button><br />
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default About