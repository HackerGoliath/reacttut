import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className='menu_style'>
                {/* <h1>React Navbar</h1> */}
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <h1>Normal Navbar</h1>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </div>
        </>
    )
}

export default Menu