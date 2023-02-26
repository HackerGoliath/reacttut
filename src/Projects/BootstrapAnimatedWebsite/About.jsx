import React from 'react'
import Common from './Common'
import web from "./images/about.jpg";

const About = () => {
    return (
        <div>
            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btnname="Contact Now" />
        </div>
    )
}

export default About