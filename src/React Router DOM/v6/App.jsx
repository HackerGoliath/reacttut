import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route path='/' element={<div>Home Page</div>} />
                    <Route path='about' element={<div>About Page</div>} />
                    <Route path='contact' element={<div>Contact Page</div>} /> */}

                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App