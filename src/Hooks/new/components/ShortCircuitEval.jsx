import { useState } from 'react'


// || -> if both true renders "left" side nahi to "right" side
// && -> if both true renders "right" side nahi to "left" side

const ShortCircuitEval = () => {
    // const [demo, setDemo] = useState("")
    const [demo, setDemo] = useState("check check")
    return (
        <div>
            <h1 className="h1Style shadow-lg m-3 p-3">
                {
                    // "Deepak" || "Bhai"
                    // "Deepak" && "Bhai"
                    demo || "technical"
                }
            </h1>
            <h1 className="h1Style shadow-lg m-3 p-3">{"technical" || demo}</h1>
            <h1 className="h1Style shadow-lg m-3 p-3">{demo && "technical"}</h1>
            <h1 className="h1Style shadow-lg m-3 p-3">{"technical" && demo}</h1>
            <h1 className="h1Style shadow-lg m-3 p-3">{demo ||
                <>
                    <h1>Mast </h1>
                    <p>You can do anything here</p>
                </>
            }</h1>
            <h1 className="h1Style shadow-lg m-3 p-3">{demo &&
                <>
                    <h1>Mast </h1>
                    <p>You can do anything here</p>
                </>
            }</h1>
        </div>
    )
}

export default ShortCircuitEval