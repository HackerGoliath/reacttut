import React from 'react'
import "./index.css";
import "./App.css";
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails';
// import AdminDetails from './components/AdminDetails';

const App = () => {
    return (
        <>
            <Navbar />
            <UserDetails />
            {/* <AdminDetails /> */}
        </>
    )
}

export default App