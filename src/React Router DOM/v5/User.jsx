import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

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
    // console.log(location);
    return (
        <>
            <h1>User Name : {fname} {lname}</h1>
            <p>My current location is : {location.pathname}</p>
            {location.pathname === `/user/deepak/bhai` ?
                (<button onClick={() => { alert("You are awesome") }}>Click Me</button>) : null
            }
        </>
    )
}

export default User