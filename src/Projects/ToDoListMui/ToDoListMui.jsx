import { useState } from "react";
import "./index.css";
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ItemList from "./ItemList";

const ToDoListMui = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const addItem = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem("");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List with material ui</h1>
                    <br />
                    <TextField className="input" onChange={handleChange} value={item} id="standard-basic" label="Standard" variant="standard" />
                    <Fab className="button" onClick={addItem}><AddIcon /></Fab>
                    <br />
                    <ol>
                        {newItem.map((val, index) => {
                            return <ItemList key={index} val={val} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoListMui;