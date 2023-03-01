import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className='main-nav'>
                {/* Ist logo part */}
                <div className="logo">
                    <h2>
                        <span>D</span>eepak
                        <span>T</span>echnical
                    </h2>
                </div>

                {/* 2nd Menu Part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                {/* 3rd Social Media Links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href="/" target="_blank"><FaFacebookSquare className='facebook' /></a></li>
                        <li><a href="/" target="_blank"><FaInstagramSquare className='instagram' /></a></li>
                        <li><a href="/" target="_blank"><FaYoutubeSquare className='youtube' /></a></li>
                    </ul>

                    {/* hamburger menu start */}
                    <div className='hamburger-menu'>
                        <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}> <GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>

            {/* Hero section */}
            {/* <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Deepak Technical</h1>
            </section> */}
        </>
    )
}

export default Navbar