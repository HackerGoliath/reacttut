import React from 'react'
import "./Navbar.css"
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"

const Home = () => {
    return (
        <>
            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Deepak technical Home Page</h1>
            </section>
        </>
    )
}
const About = () => {
    return (
        <>
            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Deepak technical About Page</h1>
            </section>
        </>
    )
}
const Services = () => {
    return (
        <>
            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Deepak technical Services Page</h1>
            </section>
        </>
    )
}
const Contact = () => {
    return (
        <>
            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Deepak technical Contact Page</h1>
            </section>
        </>
    )
}

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default App