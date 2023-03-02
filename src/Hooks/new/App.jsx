import React from 'react'
import "./App.css";
import ReducerHook from './components/useReducer/ReducerHook';
import "./index.css";
// import UseState from './components/useState/UseState'
// import UseStateObject from './components/useState/UseStateObject'
// import UseEffect from './components/useEffect/UseEffect';
// import ClearUp from './components/useEffect/ClearUp';
// import Parent from './components/useContext/Parent';


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
            <ReducerHook />
        </>
    )
}

export default App