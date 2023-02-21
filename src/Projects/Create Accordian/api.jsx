export const questions = [
    {
        id: 1,
        question: "What is virtual dom?",
        answer: "A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM."
    },
    {
        id: 2,
        question: "How do you create a React App?",
        answer: "To create a React app, you can use the Create React App tool, which is a command line interface that sets up a new React project with a basic structure and configuration.Command: npm install -g create-react-app"
    },
    {
        id: 3,
        question: "What is an event in React?",
        answer: "In React, an event is an object that represents a user action, such as a click or a key press, that occurs on an element in the user interface. React provides a way to handle events by attaching event listeners to elements, and then defining a function to be executed when the event is triggered."
    },
    {
        id: 4,
        question: "What are synthetic events in React?",
        answer: "In React, a synthetic event is a cross-browser wrapper around the browser's native event. Synthetic events provide a consistent interface to handle events across different browsers and platforms. They are created by React and do not actually correspond to native browser events.When an event occurs, React creates a synthetic event object and passes it to the event handler function.This event object has the same properties as the native event"
    },
    {
        id: 5,
        question: "What are the components in React?",
        answer: "Components are the basic building blocks of React applications. They are reusable and self-contained pieces of code that define the UI and behavior of a part of a web page. Components can be either function components or class components."
    },
    {
        id: 6,
        question: "How to add mui in React?",
        answer: "Install the MUI package using npm or yarn. In your project directory, run either of the following commands:npm install @material-ui/core"
    },
]