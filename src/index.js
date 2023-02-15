/* Links: 
https://babeljs.io/
https://picsum.photos/
*/
// var React = require('react'); // use for working with html and it includes webpack and babel
// Because of react include modern js we can use import
// import React, { Fragment } from 'react'; // for using JSX we must import react
import React from 'react'; // for using JSX we must import react
// var ReactDOM = require('react-dom'); // use for working with DOM and using render method
import ReactDOM from 'react-dom';

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
import "./index.css";
const name = "Deepak";
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const link = "https://www.w3schools.com/"
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
const heading = {
  color: "#fa9191",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  /* text-shadow: "horizontal" vertical blur; */
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0",
  fontFamily: "'Josefin Sans', sans - serif"
}
// <h1 style = {{ color: "#fa9191",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   /* text-shadow: "horizontal" vertical blur; */
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "70px 0",
//   fontFamily: 'Josefin Sans, sans - serif'}}> My name is: { name }</h1 >
ReactDOM.render(
  <>

    <h1 style={heading}>My name is : {name}</h1>
    <div className='img_div'>
      <img src={img1} alt="random images" />
      <img src={img2} alt="random images" />
      <a href={link} target="_deepak">
        <img src={img3} alt="random images" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
