import React, { createContext } from 'react'
import CompA from './CompA'

const FirstName = createContext();
const LastName = createContext();

const App = () => {
    return (
        <>
            <h1>Context API</h1>
            <ul>
                <li>React Hooks provide a concept call Context.</li>
                <li>React Context API allows you to easily access data at different levels of the component tree,
                    without passing prop to every level</li>
            </ul>
            <h2>Steps to create Context API</h2>
            <ol>
                <li>createContext()</li>
                <li>provider</li>
                <li>consumer</li>
            </ol>
            <h1>******************************************************************************</h1>
            <FirstName.Provider value="Deepak Bhai">
                <LastName.Provider value={"Banaras Vale"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default App;
export { FirstName, LastName };