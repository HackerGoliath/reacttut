// import React, { useState } from 'react'
import "./App.css";
// import RulesHooks from "./components/RulesHooks"
// import UseStateArray from "./components/UseStateArray";
// import UseStateObject from "./components/UseStateObject";
// import ShortCircuitEval from "./components/ShortCircuitEval";
// import BasicForm from "./components/forms/BasicForm";
import UseEffect1 from "./components/useEffect/UseEffect1"

const App = () => {
    // console.log(useState("Deepak Babu"));
    // let myFirstVal = useState("Banarasi")[0]
    // console.log(myFirstVal);
    // let val = "deepak technical subs"

    // const [myName, setMyName] = useState("Patakha Singh")
    // const [toggleVal, setToggleVal] = useState(true)

    // const changeName = () => {
    //     // val = "deepak bhai"
    //     // console.log(val);

    //     if (toggleVal) {
    //         setMyName("Deepak Junglee")
    //         setToggleVal(!toggleVal)
    //     }
    //     else {
    //         setMyName("Patakha Singh")
    //         setToggleVal(!toggleVal)
    //     }
    // }
    // console.log(val);

    // const changeName = () => {
    //     let val = myName;
    //     (val === "Patakha Singh") ? setMyName("Deepak Junglee") : setMyName("Patakha Singh")
    // }

    return (
        <>
            <div className="container">
                {/* <h1 className='text-capitalize'>{myName}</h1>
                <button className='btn btn-warning m-5' onClick={changeName}>Click Me Plzz</button> */}

                {/* UseState Hook */}
                {/* <RulesHooks /> */}
                {/* <UseStateArray /> */}
                {/* <UseStateObject /> */}
                {/* <ShortCircuitEval /> */}
                {/* <BasicForm /> */}

                {/* useEffect Hook */}
                <UseEffect1 />
            </div>
        </>
    )
}

export default App