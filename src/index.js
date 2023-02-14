// var React = require('react'); // use for working with html and it includes webpack and babel
// Because of react include modern js we can use import
import React from 'react';
// var ReactDOM = require('react-dom'); // use for working with DOM
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai', 'kaha dikhana hai', 'callback fun');
// ReactDOM.render('what to show', 'where to show', 'callback fun');

// Here first arguement is JSX
ReactDOM.render(<h1>Hello World!!! I am here</h1>, document.getElementById('root'));

