import React from "react";
import styled from "styled-components";
import Child from "./Child";

// const Parent = ({ user }) => {
//     const { name, age } = user
//     return (
//         <Wrapper>
//             <h2>Parent = My name is {name} and my age is {age}</h2>
//             <p>-----------------------------------------------</p>
//             <Child {...user} />
//         </Wrapper>
//     );
// };

// With useContext
const Parent = () => {
    return (
        <Wrapper>
            <h2>Parent = </h2>
            <p>-----------------------------------------------</p>
            <Child />
        </Wrapper>
    );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  font-size: 3.2rem;
`;

export default Parent;
