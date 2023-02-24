import React from 'react'
import { useParams } from 'react-router-dom'

// Without useParams
// const User = ({ match }) => {
//     return (
//         <div>User Name : {match.params.name}</div>
//     )

// With useParams
const User = () => {
    // fname and lname here as it is passed in App,name must be same
    const { fname, lname } = useParams();
    return (
        <h1>User Name : {fname} {lname}</h1>
    )
}

export default User