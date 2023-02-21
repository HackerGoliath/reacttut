import { useState } from "react";
import "./ReactHooks.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-live-clock';
import Countdown from 'react-countdown';


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
    // let newTime = new Date().toLocaleTimeString();
    // const [cTime, setCtime] = useState(newTime)

    // const UpdateTime = () => {
    //     newTime = new Date().toLocaleTimeString();
    //     setCtime(newTime);
    // }
    // return (
    //     <>
    //         <h1>{cTime}</h1>
    //         <button onClick={UpdateTime}>Get Time</button>
    //     </>
    // )

    // Digital Clock

    // setInterval(UpdateTime, 1000);
    // return (
    //     <h1>{cTime}</h1>
    // )


    // Challenge 8 : Increment Decrement
    const [value, setValue] = useState(0);

    const decValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
        else {
            alert("Limit reached");
            setValue(0);
        }
    }

    const incValue = () => {
        setValue(value + 1)
    }

    return (
        <>
            <div className="main_div">
                <Countdown date={Date.now() + 10000} />
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'IN/Pacific'} />
                <h1>{value}</h1>
                <Tooltip title="subtract"><Button className="btn_red" onClick={decValue}><RemoveIcon /></Button></Tooltip>
                <Tooltip title="add"><Button className="btn_green" onClick={incValue}><AddIcon /></Button></Tooltip>
            </div>
        </>
    )
}

export default ReactHooks;