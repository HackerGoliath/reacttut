import React, { useContext } from 'react'
import CompC from './CompC'
import { FirstName, LastName } from './App'

// useContext

const CompB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h2>CompB = useContext</h2>
            <h4>First Name : {fname}</h4>
            <h4>Last Name : {lname}</h4>
            <CompC />
            <h4>CompB Line ------------------------------------------------------</h4>
        </>
    )
}

export default CompB