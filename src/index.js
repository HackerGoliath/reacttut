/* Links: 
https://babeljs.io/
https://picsum.photos/
*/
// var React = require('react'); // use for working with html and it includes webpack and babel
// Because of react include modern js we can use import
// import React, { Fragment } from 'react'; // for using JSX we must import react
import React from 'react'; // for using JSX we must import react
// var ReactDOM = require('react-dom'); // use for working with DOM and using render method
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import "./index.css";

// ReactDOM.render('kya dikhana hai', 'kaha dikhana hai', 'callback fun');
// ReactDOM.render('what to show', 'where to show', 'callback fun');

// Here first arguement is JSX - Javascript Extension or Javascript XML
// ReactDOM.render(<h1>Hello World!!! I am here</h1>, document.getElementById('root'));

// The above jsx code gets converted into following js so the browser can understand
// "use strict";
// here null corresponds to atribute
// ReactDOM.render( React.createElement("h1", null, "Hello World!!! I am here"), document.getElementById('root'));

// if h1 has attribute class
// ReactDOM.render(<h1 class="Hello">Hello World!!! I am here</h1>, document.getElementById('root'));

// then its converted into with the help of babel so the browser can understand 

// "use strict";
// ReactDOM.render(React.createElement("h1", {
//   class: "Hello"
// }, "Hello World!!! I am here"), document.getElementById('root'));

// or

// "use strict";

// var _react = _interopRequireDefault(require("react"));
// var _reactDom = _interopRequireDefault(require("react-dom"));
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// _reactDom.default.render( /*#__PURE__*/_react.default.createElement("h1", null, "Hello World!!! I am here"), document.getElementById('root'));


// In pure javascript you can print like this
// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello World!!!";
// document.getElementById("root").appendChild(h1);

// render method takes only one single jsx element as first parameter if you want to pass multiple jsx elements then the elements must be wrapped in a one single jsx element (<></>)

// First Method
// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>How are you</p>
//     <h2>Plz tell me</h2>
//   </div>,
//   document.getElementById("root"))

// Second Method
// for react version greater than 16 you don't need to write div to wrap jsx elements
// you can store it in array or using as an array of jsx elements
// const arr = ['deepak','rohan','shahid']
// ReactDOM.render(
//   [
//     <h1>Hello World array</h1>,
//     <p>How are you?</p>,
//     <h2>Plz tell me Are you fine?</h2>
//   ],
//   document.getElementById("root"))

// Third Method -> React fragment
// if we use div to wrap then a div tag is created under root div to avoid this we use react Fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello World</h1>
//     <p>How are you</p>
//     <h2>Plz tell me</h2>
//   </React.Fragment>,
//   document.getElementById("root"));

// You can write above as 
// ReactDOM.render(
//   <>
//     <h1>Hello World</h1>
//     <p>How are you</p>
//     <h2>Plz tell me</h2>
//   </>,
//   document.getElementById("root"));


// Challenge 1
// ReactDOM.render(
//   <>
//     <h1>Five Best Netflix Series</h1>
//     <p>My favourites are</p>
//     <ol>
//       <li>The Watchers</li>
//       <li>Stranger Things</li>
//       <li>Narcos</li>
//       <li>Arrow</li>
//       <li>The Flash</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );
// -----------------------------------

// Js expressions in Jsx
// Within curly braces we use Js expressions(but we can not use statements inside {})
// const fman = "Deepak"
// ReactDOM.render(
//   <>
//     <h1>First man is {fman}</h1>
//     <p>My lucky number is {3 * 2 + 1}</p>
//     <p>Generated random number between 1 to 10 : {Math.floor(Math.random() * 10) + 1}</p>
//     <p>
//       Js Statements can not be executed inside curly braces because it returns a value<br />
//       {/* {if(3>5){
//         console.log("true");
//       }
//       else{
//         console.log("False");
//       }} */}
//     </p>
//   </>,
//   document.getElementById("root")
// );
// ------------------------------------

// Template Literals eg: console.log(`My name is ${fname} ${lname}`)
// const fname = "Deepak";
// const lname = "Bhai";

// ReactDOM.render(
//   <>
//     <h1>First method is : {fname} {lname}</h1>
//     <h1>First second is : {fname + " " + lname}</h1>
//     <h1>{`Template literal method is : ${fname} ${lname} and my lucky number is ${5 + 5}`}</h1>
//   </>,
//   document.getElementById("root")
// );
// ----------------------------------

// Challenge 2 Current date and time
// const name = "Deepak";
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1>My name is : {name}</h1>
//     <p>Today's date is : {date}</p>
//     <p>Current time is : {time}</p>
//   </>,
//   document.getElementById("root")
// );
// -------------------------------------------


// jsx attributes
// Also search for HTML global Attributes
// const name = "Deepak";
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/300"
// const link = "https://www.w3schools.com/"
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">My name is : {name}</h1>
//     <img src={img1} alt="random images" />
//     <img src={img2} alt="random images" />
//     <a href={link} target="_deepak">
//       <img src={img3} alt="random images" />
//     </a>
//   </>,
//   document.getElementById("root")
// );

// CSS Styling
// import "./index.css";
// const name = "Deepak";
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/300"
// const link = "https://www.w3schools.com/"
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true" className='heading'>My name is : {name}</h1>
//     <div className='img_div'>
//       <img src={img1} alt="random images" />
//       <img src={img2} alt="random images" />
//       <a href={link} target="_deepak">
//         <img src={img3} alt="random images" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// Inline css
// const heading = {
//   color: "#fa9191",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   /* text-shadow: "horizontal" vertical blur; */
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "70px 0",
//   fontFamily: "'Josefin Sans', sans - serif"
// }
// <h1 style = {{ color: "#fa9191",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   /* text-shadow: "horizontal" vertical blur; */
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "70px 0",
//   fontFamily: 'Josefin Sans, sans - serif'}}> My name is: { name }</h1 >
// ReactDOM.render(
//   <>

//     <h1 style={heading}>My name is : {name}</h1>
//     <div className='img_div'>
//       <img src={img1} alt="random images" />
//       <img src={img2} alt="random images" />
//       <a href={link} target="_deepak">
//         <img src={img3} alt="random images" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );


// Challenge-3 Greeting Website
// let currDate = new Date();
// // currDate = currDate.getHours();
// currDate = 13;

// const cssStyle = {}

// let greeting = "";
// if (currDate >= 1 && currDate < 12) {
//   greeting = "Good Morning";
//   cssStyle.color = "green"
// }
// else if (currDate >= 12 && currDate < 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange"
// }
// else {
//   greeting = "Good Night";
//   cssStyle.color = "gray"
// }

// ReactDOM.render(
//   <>
//     <div class="greet">
//       <h1 className='heading'>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );
// ====================================================


// React Components
// ReactDOM.render(
//   <>
//     <h1>My name is Deepak</h1>
//     <p>This is my World</p>
//     <ol>
//       <li>First</li>
//       <li>Second</li>
//       <li>Third</li>
//       <li>Fourth</li>
//       <li>Fifth</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );
// import Heading from './Heading';
// import List from './List';
// import Para from './Para';
// ReactDOM.render(
//   <>
//     <Heading />
//     <Para />
//     <List />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );
// =============================================

// Modules Import Export
// import youtuber from './App';
// default exported component import by any name
// import favyt, { favProg, firstFunc, secondFunc } from "./App";

// imported as wildcard
// now all the imports get imported into ques as object
// import * as ques from "./App";
// ReactDOM.render(
//   <>
//     <ol>
//       <li>Deepak</li>
//       <li>Bhai</li>
//       {/* <li>Youtuber : {youtuber}</li> */}
//       {/* <li>Favourite Youtuber : {favyt}</li>
//       <li>Favourite Programming Language : {favProg}</li>
//       <li>{firstFunc()}</li>
//       <li>{secondFunc()}</li> */}
//       <li>{ques.default}</li>
//       <li>{ques.favProg}</li>
//       <li>{ques.firstFunc()}</li>
//       <li>{ques.secondFunc()}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );
// ====================================================

// Challenge-5 Simple Calculator
// ReactDOM.render(<App />, document.getElementById("root"));
// ==============================================

// Netflix App
// import Card from "./Cards";
// import Sdata from './Sdata';

// console.log(Sdata[0].imgsrc);

// function ncard(val) {
//   // console.log(val);
//   return (
//     <Card
//       // className="kuchbhi"
//       imgsrc={val.imgsrc}
//       sname={val.sname}
//       title={val.title}
//       link={val.link}
//     />
//   )
// }


// ReactDOM.render(
//   <>
//     <h1 className='heading_style'>List of Top 5 Netflix Series in 2023</h1>
/* {Sdata.map(ncard)}
{Sdata.map(
  function ncard(val) {
    return (
      <Card
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.link} 
      />
    )
  })} 

// Fat Arrow Function 
{Sdata.map((val, index, array) => {
  // console.log(index);
  // console.log(array);
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      sname={val.sname}
      title={val.title}
      link={val.link}
    />
  )
})} 
</>,
document.getElementById("root")
);
*/
// ========================================================

// Project: Slot Machine Game
// import SlotMachineGame from "./Projects/SlotMachineGame/SlotMachineGame";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// root.render(<SlotMachineGame />);
// ================================================================

// React hooks
// import ReactHooks from "./ReactHooks";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ReactHooks />);


// Handling Events
// import Events from './Events';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Events />);
// ====================================================================

// Forms
// import App from "./Forms/App"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
/* Spread Operator */
// 1st Case:
// const myName = ["Deepak", "Bhai"];
// const bioData = [1, ...myName, 26, "male"];
// console.log(myName, bioData);

// 2nd Case:
// const shooterGame = ["IGI", "Far Cry", "Resident Evil"];
// const racingGame = ["Ashphalt", "NFS", "Fast Five"];
// const game = [...shooterGame, ...racingGame];
// console.log(game);

// 3rd Case:
// const shooterGame = ["IGI", "Far Cry", "Resident Evil"];
// const [first, ...remaining] = shooterGame;
// console.log(first);
// console.log(remaining);

// Spread Operator In Objects
// const fullName = {
//   fname: "Deepak",
//   lname: "Bhai"
// }

// const bioData = {
//   id: 1,
//   ...fullName,
//   age: 26,
//   gender: "male"
// }
// console.log(fullName);
// console.log(bioData);


// Project 2: ToDo List
// import App from "./Projects/ToDoList/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Challenge 8 : Increment Decrement
// import ReactHooks from './ReactHooks';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ReactHooks />
//   </React.StrictMode>
// );

// Project: ToDoList With Material UI
import ToDoListMui from './Projects/ToDoListMui/ToDoListMui';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoListMui />
  </React.StrictMode>
) 