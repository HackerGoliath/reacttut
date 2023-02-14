// Links: https://babeljs.io/

// var React = require('react'); // use for working with html and it includes webpack and babel
// Because of react include modern js we can use import
import React from 'react'; // for using JSX we must import react
// var ReactDOM = require('react-dom'); // use for working with DOM and using render method
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai', 'kaha dikhana hai', 'callback fun');
// ReactDOM.render('what to show', 'where to show', 'callback fun');

// Here first arguement is JSX - Javascript Extension or Javascript XML
ReactDOM.render(<h1>Hello World!!! I am here</h1>, document.getElementById('root'));

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
var h1 = document.createElement('h1');
h1.innerHTML = "Hello World!!!";
document.getElementById("root").appendChild(h1);

