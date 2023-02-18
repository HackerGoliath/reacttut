// import React from "react";
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
// function App() {
//     let currDate = new Date();
//     // currDate = currDate.getHours();
//     currDate = 9;

//     const cssStyle = {}

//     let greeting = "";
//     if (currDate >= 1 && currDate < 12) {
//         greeting = "Good Morning";
//         cssStyle.color = "green"
//     }
//     else if (currDate >= 12 && currDate < 19) {
//         greeting = "Good Afternoon";
//         cssStyle.color = "orange"
//     }
//     else {
//         greeting = "Good Night";
//         cssStyle.color = "gray"
//     }
//     return (
//         <div class="greet">
//             <h1 className='heading'>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
//         </div>
//     )
// }

// export default App;
// ===========================================

// Module import export
// const youtuber = "Deepak Technical";
// const favProg = "React Js";

// function firstFunc() {
//     let str1;
//     return (str1 = "This is first Function");
// }

// function secondFunc() {
//     let str2 = "This is second Function";
//     return str2;
// }

// export default youtuber;
// export { favProg, firstFunc, secondFunc };
// ===================================================


// Challenge-5 Simple Calculator
// import { add, sub, mul, div } from "./Calc"
// function App() {
//     return (
//         <>
//             <ol>
//                 <li>The addition is : {add(40, 4)}</li>
//                 <li>The subtraction is : {sub(40, 4)}</li>
//                 <li>The multiplication is : {mul(40, 4)}</li>
//                 <li>The division is : {div(40, 3)}</li>
//             </ol>
//         </>
//     );
// }

import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";
// const FavS = () => {
//     if (favSeries === "netflix") {
//         return <Netflix />
//     }
//     else {
//         return <Amazon />
//     }
// }

const App = () => {
    return (
        <>
            <h1 className='heading_style'>List of Top 5 Netflix Series in 2023</h1>
            {/* 
            {Sdata.map((val, index, array) => {
                console.log(index);
                console.log(array);
            return (
            <Card
                key={val.id}
                imgsrc={val.imgsrc}
                sname={val.sname}
                title={val.title}
                link={val.link}
            />
             })}
            */}

            {/* <FavS /> */}

            {(favSeries === "netflix") ? <Netflix /> : <Amazon />}
        </>
    )
}
export default App;