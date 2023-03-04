/*
1: Always write it inside the component function 
2: Component name must be PascalCase(first letter should be uppercase)
3: We can directly import or we can directly write it using React.hookname.
4: Don't call Hooks inside loops, condition, or nested function 
*/

import React from 'react'

const RulesHooks = () => {
    // if (true) {
    // Throws Error : Hooks cannot call inside conditions or loop
    // But you can call setMyName inside condition or loop
    //     const [myName, setMyName] = React.useState("Deepak");
    // }
    const [myName, setMyName] = React.useState("Deepak")
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RulesHooks