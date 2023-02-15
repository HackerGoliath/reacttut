import React from "react";
// import Heading from "./Heading";
// import List from "./List";
// import Para from "./Para";

// function App() {
//     return (
//         <>
//             <Heading />
//             <Para />
//             <List />
//             <Para />
//         </>
//     )
// }

// Challenge 4 : Greeting Website - Split into components
function App() {
    let currDate = new Date();
    // currDate = currDate.getHours();
    currDate = 9;

    const cssStyle = {}

    let greeting = "";
    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green"
    }
    else if (currDate >= 12 && currDate < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange"
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "gray"
    }
    return (
        <div class="greet">
            <h1 className='heading'>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export default App;