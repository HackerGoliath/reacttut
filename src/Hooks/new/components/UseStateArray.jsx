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

    const removeElem = (id) => {
        // alert(id)
        const myNewArray = myArray.filter((prevVal) => {
            // console.log(prevVal);
            return prevVal.id !== id
        })
        setMyArray(myNewArray)
    }

    return (
        <div>
            {
                myArray.map((currElem) => <h1 key={currElem.id} className="h1Style shadow-lg m-3 p-3">Name :
                    {currElem.name} and age : {currElem.age}
                    <button className='mx-3 btn btn-danger' onClick={() => removeElem(currElem.id)}>remove</button>
                </h1>
                    // console.log(currElem);
                )
            }
            <button className='btn btn-info shadow-lg px-5 my-2' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UseStateArray