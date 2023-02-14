// Links: https://babeljs.io/

// var React = require('react'); // use for working with html and it includes webpack and babel
// Because of react include modern js we can use import
import React, { Fragment } from 'react'; // for using JSX we must import react
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
ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <p>How are you</p>
    <h2>Plz tell me</h2>
  </>,
  document.getElementById("root"));
