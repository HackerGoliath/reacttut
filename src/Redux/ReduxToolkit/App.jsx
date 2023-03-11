import React from 'react'
import "./index.css";
import "./App.css";
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails';

const App = () => {
    return (
        <>
            <Navbar />
            <UserDetails />
        </>
    )
}

export default App