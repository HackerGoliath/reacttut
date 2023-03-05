import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Hello useEffect-1");
        if (count >= 1) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = `Chat`
        }
    }, [count])

    useEffect(() => {
        console.log("Hello useEffect-2");
    }, [])
    console.log("Hello Outside of useEffect");

    return (
        <>
            <h1 className='text-center'>{count}</h1>
            <button className='btn btn-primary px-5 py-2' onClick={() => {
                setCount(count + 1)
            }}>Click 🤨</button>
        </>
    )
}

export default UseEffect1