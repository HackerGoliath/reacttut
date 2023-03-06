import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    return (
        <div>
            <h1 className='text-center m-5'>Hello {location.pathname.replace("/", "")}</h1>
            {
                location.pathname === "/about/deepak" ?
                    <p>Hello Deepak, Good to see you again.</p> :
                    <p>Login to see your files</p>
            }
        </div>
    )
}

export default Home