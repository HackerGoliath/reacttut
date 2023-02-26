import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='bg-light text-center'>
                <p>© {date} Deepak Technical | All Rights Reserved ® | Terms and Conditions Apply</p>
            </footer>
        </>
    )
}

export default Footer