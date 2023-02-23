import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const expandIt = () => {
        setExpand(true);
    }
    const bToNormal = () => {
        setExpand(false);
    }

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    }

    return (
        <>
            <div className="main_note" onDoubleClick={bToNormal}>
                <form action="">
                    {expand ? <input type="text" name='title' value={note.title} onChange={handleChange} placeholder='Title' autoComplete='off' />
                        : null}
                    <textarea name="content" value={note.content} onChange={handleChange} id="" cols="" rows="" placeholder='Write a note...' onClick={expandIt}></textarea>

                    {expand && <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>}
                </form>
            </div>
        </>
    )
}

export default CreateNote