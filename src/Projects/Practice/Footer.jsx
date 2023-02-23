import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='fixed-bottom text-center'>
                <p>
                    copyright &copy; {year}
                </p>
            </footer>
        </>
    )
}

export default Footer