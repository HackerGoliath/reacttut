import "./Accordian.css";
import { questions } from "./api";
import { useState } from "react";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const [data, setData] = useState(questions)

    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions</h1>
                {
                    data.map((currElem) => {
                        const { id } = currElem;
                        return <MyAccordian key={id}{...currElem} />;
                    })
                }
            </section>
        </>
    )
}

export default Accordian;