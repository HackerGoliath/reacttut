import React from 'react'
import { FirstName, LastName } from './App';

// Context API
const CompC = () => {
    return (
        <>
            <FirstName.Consumer>{(fName) => {
                return (
                    <LastName.Consumer>{(lName) => {
                        return (
                            <>
                                <h2>CompC = Context API</h2>
                                <h3>First Name: {fName}</h3>
                                <h3>Last Name: {lName}</h3>
                                <p>Consumer Always required function</p>
                            </>
                        )
                    }}</LastName.Consumer>
                )
            }}


            </FirstName.Consumer>
            <h4>CompC Line ------------------------------------------------------</h4>
        </>
    )
}

export default CompC