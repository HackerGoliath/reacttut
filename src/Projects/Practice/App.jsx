import React from 'react'
import Footer from './Footer';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Content from './Content';
import Navbar from './Navbar';
import Note from './Note';


const App = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Note />
            <Footer />
        </>
    )
}

export default App