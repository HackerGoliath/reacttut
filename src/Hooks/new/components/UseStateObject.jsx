import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        myName: "Deepak", myAge: 28, degree: "MCA"
    })

    const changeObject = () => {
        setMyObject({ ...myObject, myName: "Banarasi Babu" })
    }
    return (
        <div>
            <h1 className="h1Style shadow-lg m-3 p-3">Name:{myObject.myName}  & Age: {myObject.myAge} & Degree: {myObject.degree}</h1>
            <button className='btn btn-info shadow-lg px-5 py-2 my-2' onClick={changeObject}> Update </button>
        </div>
    )
}

export default UseStateObject