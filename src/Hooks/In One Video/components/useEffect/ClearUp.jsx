import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClearUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const [heightCount, setHeightCount] = useState(window.screen.height);

    const currentScreenSize = () => {
        setWidthCount(window.innerWidth);
        setHeightCount(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", currentScreenSize);

        // clearup function
        return () => {
            window.removeEventListener("resize", currentScreenSize);
        }
    })
    return (
        <Wrapper>
            <div className="container">
                <h2>
                    The size of the window is, <br />
                    width:<span> {widthCount} </span>
                    <br />
                    height:<span> {heightCount} </span>
                </h2>
            </div>
        </Wrapper>
    );
};
// ClearUp;
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;

export default ClearUp;
