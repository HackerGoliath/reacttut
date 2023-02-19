import "./index.css";
import { useState } from "react";
const App = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState();
    const [lastNameNew, setLastNameNew] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const inputEvent2 = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    const showName = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
        // setFullName(name + " " + lastName);
    }

    // return (
    //      Withot Form Tag
    //      <div>
    //          <h1>Hello {fullName}</h1>
    //     <input type="text" placeholder="Enter your name" /> 
    //         <input type="text" placeholder="Enter your name" value="" />
    //         <input type="text" placeholder="Enter your name" defaultValue="" />

    //         <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name} />
    //         <button onClick={showName}>Click Me 🤖</button>
    //     </div> 

    // =========================================================
    return (
        <div>
            <form onSubmit={showName}>
                <div>
                    <h1>Hello {fullName} {lastNameNew}</h1>
                    <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name} />
                    <br />
                    <input type="text" placeholder="Enter your last name" onChange={inputEvent2} value={lastName} />
                    <button type="submit">Click Me</button>
                </div>
            </form>
        </div>
    )

}

export default App;