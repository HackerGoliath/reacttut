import { useState } from "react";
import "./ReactHooks.css"

// Array Destructuring
// const name = ["deepak", "Rahul", "Suresh"]
// const [name1, name2, name3] = name
// console.log(name1, name2, name3);


const ReactHooks = () => {
    // const state = useState();
    // const [count, setCount] = useState(0);
    // console.log(count);
    // const IncNum = () => {
    //     // setCount(10);
    //     setCount(count + 1);
    //     // console.log("Button Clicked", count++);
    // }

    // const DecNum = () => {
    //     setCount(count - 1);
    // }
    // return (
    //     <>

    //         <h1>{count}</h1>
    //         {/* <button onClick={DecNum}>Decrement(-)</button>
    //         <button onClick={IncNum}>Increment(+)</button> */}
    //         <button onClick={IncNum}>Increment(+)</button>

    //     </>
    // )

    // Challeng 6 : Get time 
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setCtime] = useState(newTime)

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    // return (
    //     <>
    //         <h1>{cTime}</h1>
    //         <button onClick={UpdateTime}>Get Time</button>
    //     </>
    // )

    // Digital Clock

    setInterval(UpdateTime, 1000);
    return (
        <h1>{cTime}</h1>
    )
}

export default ReactHooks;