// Handling Events
import { useState } from "react";
import "./ReactHooks.css"

const Events = () => {
    const purple = "purple";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const bgChange = () => {
        const newBg = "#34495e"
        setBg(newBg);
        setName("Ouch!!! 😨")
    }

    const bgBack = () => {
        setBg(purple);
        setName("Ayyo!!! 😣")
    }

    return (
        <div style={{ backgroundColor: bg }}>
            {/* <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button> */}
            <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
        </div>
    )
}

export default Events;