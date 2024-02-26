import React from 'react';
import './Note.css';

function Note(props) {

    const clickHandler = (noteId) =>{
        props.onRemove(noteId);
    }

    return (
        <>
            <div className='NoteClass' style={{backgroundColor:`${props.noteColor}`}}>
                <span>{props.noteTitle}</span>
                <button
                    onClick={() => clickHandler(props.id)}
                >
                    <i className='fas fa-trash-alt'></i>
                </button>
            </div>
        </>
    )
}

export default Note