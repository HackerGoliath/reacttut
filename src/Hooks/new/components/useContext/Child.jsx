import React from "react";
import { useContext } from "react";
import { AppContext } from "./UserContext";
// import { useGlobalContext } from "./components/usecontext/userContext";

// Without useContext
// const Child = (user) => {
// const { name, age } = user;

const Child = () => {
    // const userData = useGlobalContext();
    // console.log("🚀 ~ file: Child.jsx ~ line 8 ~ Child ~ userData", userData);

    // With useContext
    const userData = useContext(AppContext)
    console.log(userData);
    return (
        <div>
            {/* Without useContext */}
            {/* <h2>Child = My name is {name} and my age is {age}</h2> */}

            {/* With useContext */}
            Child = My name is {userData.name} and my age is {userData.age}.
        </div>
    );
};

export default Child;
