import React from 'react'
import "./App.css";
import "./index.css";
// import UseState from './components/useState/UseState'
// import UseStateObject from './components/useState/UseStateObject'
// import UseEffect from './components/useEffect/UseEffect';
// import ClearUp from './components/useEffect/ClearUp';
// import Parent from './components/useContext/Parent';
// import ReducerHook from './components/useReducer/ReducerHook';
// import RefHook1 from './components/useRef/RefHook1';
import RefHook2 from './components/useRef/RefHook2';


const App = () => {
    /* Without useContext Hook */
    // const userData = {
    //     name: "Deepak",
    //     age: 28
    // };
    return (
        <>
            {/* <UseStateObject /> */}
            {/* <UseEffect /> */}
            {/* <ClearUp /> */}

            {/* Without useContext Hook */}
            {/* <Parent user={userData} /> */}

            {/* With useContext Hook */}
            {/* <Parent /> */}

            {/* useReducer Hook */}
            {/* <ReducerHook /> */}

            {/* useRef Hook */}
            {/* <RefHook1 /> */}
            {/* Accessing DOM element */}
            <RefHook2 />
        </>
    )
}

export default App