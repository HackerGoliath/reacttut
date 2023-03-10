import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header>
                <NavLink to="/">Logo</NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar