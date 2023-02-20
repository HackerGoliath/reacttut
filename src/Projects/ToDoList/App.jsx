import "./index.css";
import { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    }

    const deleteItems = (id) => {
        console.log("Delete cliked");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" onChange={handleChange} placeholder="Add an item here" value={inputList} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}

                        {items.map((itemVal, index) => {
                            return <ToDoLists key={index} id={index} onSelect={deleteItems} text={itemVal} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;