import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./index.css";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App