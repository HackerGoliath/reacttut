import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

// Without useParams
// const User = ({ match }) => {
//     return (
//         <div>User Name : {match.params.name}</div>
//     )

// With useParams
const User = () => {
    // fname and lname here as it is passed in App,name must be same
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(navigate);
    return (
        <>
            <h1>User Name : {fname} {lname}</h1>
            <p>My current location is : {location.pathname}</p>
            {location.pathname === `/user/deepak/bhai` ?
                // (<button onClick={() => { navigate(-1) }}>Go Back</button>) : null
                (<button onClick={() => { navigate("/") }}>Home Page</button>) : null
            }
        </>
    )
}

export default User