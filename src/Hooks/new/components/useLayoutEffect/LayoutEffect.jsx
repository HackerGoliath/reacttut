// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";


const LayoutEffect = () => {
    const [num, setNum] = useState(0)
    // useEffect(() => {
    //     console.log("I am first useEffect Hook");
    // }, [])

    // useEffect(() => {
    //     console.log("I am second useEffect Hook");
    // }, [])

    // useLayoutEffect(() => {
    //     console.log("I am second useEffect Hook");
    // }, [])

    // useEffect(() => {
    //     console.log("I am third useEffect Hook");
    // }, [])

    // useEffect(() => {
    //     if (num === 0) setNum(num + Math.floor(Math.random() * 100))
    // }, [num])

    useLayoutEffect(() => {
        if (num === 0) setNum(num + Math.random() * 100)
    }, [num])
    return (
        <Wrapper>
            <p>My new random number : {num}</p>
            <button onClick={() => setNum(0)}>Random Number Generator</button>
        </Wrapper>
    )
}


const Wrapper = styled.section``;
export default LayoutEffect