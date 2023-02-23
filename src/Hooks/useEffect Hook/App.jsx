import React, { useEffect, useState } from 'react'

const App = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0)

    // useEffect always expect a function
    // [] is used when you want to run useEffect first time when the page is rendered
    useEffect(() => {
        // alert("You Clicked");
        // console.log("You Clicked");

        // Challenge 7
        document.title = `You Clicked ${num} times`;
    }, [num])

    return (
        <>
            {/* 
            This doen't work so use useEffect
            <button onClick={() => { setNum(num + 1) },()=>{alert("You Clicked")}}>Click Me {num}</button> */}
            <button onClick={() => { setNum(num + 1) }}>Click Me {num}</button>
            <button onClick={() => { setNums(nums + 1) }}>Click Me {nums}</button>
        </>
    )
}

export default App