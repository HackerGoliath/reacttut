import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const ItemList = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <div className="todo_style">
            <span onClick={cutIt}><HighlightOffIcon className='deleteIcon' /></span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.val}</li>
        </div>
    )
}

export default ItemList;