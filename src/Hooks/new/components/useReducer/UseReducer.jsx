import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    return state
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='bg-info rounded-2 p-xl-5'>
            <h1 className='text-center'>{state}</h1>
            <button className='btn btn-primary p-2 px-4 mx-2' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button className='btn btn-primary p-2 px-4 mx-2' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    )
}

export default UseReducer