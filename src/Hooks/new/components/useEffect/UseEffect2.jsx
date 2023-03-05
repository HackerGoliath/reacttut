// CleanUp Function

import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    const currentScreenWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        console.log("Add Event");
        setWidthCount(window.innerWidth);
        window.addEventListener("resize", currentScreenWidth);

        // CleanUp Function
        return () => {
            console.log("Remove Event");
            window.removeEventListener("resize", currentScreenWidth);
        }
    }, [widthCount])


    return (
        <>
            <p>The actual size of the window is :</p>
            <h1>{widthCount}</h1>
        </>
    )
}

export default UseEffect2