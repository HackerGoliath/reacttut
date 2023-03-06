import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    return (
        <div>
            <h1 className='text-center m-5'>Hello {location.pathname.replace("/", "")}</h1>
        </div>
    )
}

export default About