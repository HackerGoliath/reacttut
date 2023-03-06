import React, { useState } from 'react'
import useTitleCount from './useTitleCount'

const CustomHook = () => {
    const [count, setCount] = useState(0)
    useTitleCount(count)



    return (
        <>
            <h1 className='text-center'>{count}</h1>
            <button className='btn btn-primary px-5 py-2' onClick={() => {
                setCount(count + 1)
            }}>Custom Click 🤨</button>
        </>
    )
}

export default CustomHook
