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
// import RefHook2 from './components/useRef/RefHook2';
// import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
// import MemoHook from './components/useMemo/MemoHook';
// import CallbackHook from './components/useCallback/CallbackHook';
import Parent from './components/customHook/Parent';

const App = () => {
    /* Without useContext Hook */
    // const userData = {
    //     name: "Deepak",
    //     age: 28
    // };
    return (
        <>
            {/* 1.<UseStateObject /> */}
            {/* 2.1<UseEffect /> */}
            {/* 2.2<ClearUp /> */}

            {/* Without useContext Hook */}
            {/* 3.1<Parent user={userData} /> */}

            {/* With useContext Hook */}
            {/* 3.2<Parent /> */}

            {/* useReducer Hook */}
            {/* 4.<ReducerHook /> */}

            {/* useRef Hook */}
            {/* 5.1<RefHook1 /> */}
            {/* Accessing DOM element */}
            {/* 5.2<RefHook2 /> */}

            {/* useLayoutEffect */}
            {/* 6.<LayoutEffect /> */}

            {/* useMemo */}
            {/* 7.<MemoHook /> */}

            {/* 8.useCallback Hook */}
            {/* <CallbackHook /> */}

            {/* 9.Custom Hook */}
            <Parent />
        </>
    )
}

export default App