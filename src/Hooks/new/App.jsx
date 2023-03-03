import React, { useState } from 'react'
import "./App.css";

const App = () => {
    // console.log(useState("Deepak Babu"));
    // let myFirstVal = useState("Banarasi")[0]
    // console.log(myFirstVal);
    // let val = "deepak technical subs"

    const [myName, setMyName] = useState("Patakha Singh")
    const [toggleVal, setToggleVal] = useState(true)
    const changeName = () => {
        // val = "deepak bhai"
        // console.log(val);
        setMyName("Deepak Junglee")
    }
    // console.log(val);
    return (
        <>
            <div className="container">
                <h1 className='text-capitalize'>{myName}</h1>
                <button className='btn btn-warning m-5' onClick={changeName}>Click Me Plzz</button>
            </div>
        </>
    )
}

export default App