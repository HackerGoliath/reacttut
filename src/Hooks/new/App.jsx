import React from 'react'
import "./App.css";
import Parent from './components/useContext/Parent';
import "./index.css";
// import UseState from './components/useState/UseState'
// import UseStateObject from './components/useState/UseStateObject'
// import UseEffect from './components/useEffect/UseEffect';
// import ClearUp from './components/useEffect/ClearUp';


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
            <Parent />
        </>
    )
}

export default App