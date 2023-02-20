import { FiDelete } from "react-icons/fi";

const ToDoLists = (props) => {
    return (
        <>
            <div className="todo_style">
                <FiDelete className="fa-times" onClick={() => { props.onSelect(props.id) }} />
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;