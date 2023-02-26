import React from 'react'
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1>404 Error Page</h1>
            <p>Sorry, This page doesn't exist</p>
            <NavLink to="/">Go Back</NavLink>
        </>
    )
}

export default Error