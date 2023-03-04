import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id: 1, name: "Deepak", age: 26
        },
        {
            id: 2, name: "Babulal", age: 27
        },
        {
            id: 3, name: "Bablu", age: 21
        },
    ]
    // console.log(bioData);
    const [myArray, setMyArray] = useState(bioData);
    const clearArray = () => {
        setMyArray([]);
    }
    return (
        <div>
            {
                myArray.map((currElem, ind) => <h1 key={ind} className="h1Style shadow-lg m-3">Name : {currElem.name} and age : {currElem.age}</h1>
                    // console.log(currElem);
                )
            }
            <button className='btn btn-info shadow-lg px-5 my-2' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UseStateArray