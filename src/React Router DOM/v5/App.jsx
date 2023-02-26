import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import Menu from './Menu';
import User from './User';
import Search from './Search';
import "./index.css";

const App = () => {
    const Name = () => {
        return <h1>This is Name Page </h1>
    }
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home name="Home" />} />
                <Route path='/about' element={<About name="About" />} />
                <Route path='/service' element={<Service name="Service" />} />
                <Route path='/search' element={<Search />} />
                <Route path='/contact' element={<Contact name="Contact" />} />
                <Route path='/user/:fname/:lname' element={<User />} />
                <Route path='/contact/name' element={<Name />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default App