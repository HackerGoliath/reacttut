import React from "react";
import { useGlobalContext } from "./UserContext";

const Child = () => {

    const userData = useGlobalContext()
    console.log(userData);
    return (
        <div>

            Child = My name is {userData.name} and my age is {userData.age}.
        </div>
    );
};

export default Child;
