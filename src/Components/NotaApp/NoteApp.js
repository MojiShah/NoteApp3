import React, { useEffect, useState } from 'react';
import ColorBox from './NoteApp Components/ColorBox';
import Note from './NoteApp Components/Note';
import './NoteApp.css';

function NoteApp() {
    //States///////////////////////////////////////
    const [color, setColor] = useState([
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
    ]);
    const [inputValue, setInputValue] = useState('');
    const [inputColor, setInputColor] = useState('#fff');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log(notes);
    }, [notes])

    //Functions//////////////////////////////////////////

    const inputColorHandler = (color) => {
        setInputColor(color)
    }

    const removeInput = () => {
        setInputValue('');
        setInputColor('#fff');
    }

    const addNotes = () => {
        let newNote = {
            id: notes.length + 1,
            noteTitle: inputValue,
            noteColor: inputColor
        };
        let allNotes = [...notes, newNote];
        setNotes(allNotes);
        removeInput();
    }

    const removeNote = (noteId) =>{
        let oldnotes=[...notes];
        let filteredNotes = oldnotes.filter(x=> x.id !== noteId);
        setNotes(filteredNotes);
    }


    //JSX///////////////////////////////////////////////
    return (
        <>
            <div className='note_input'>
                <input type="text"
                    className="form-input"
                    placeholder='Type your task here ...'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    style={{ backgroundColor: `${inputColor}` }}
                />

            </div>

            <div className="actions">
                <button
                    onClick={addNotes}
                >
                    <i className='fas fa-plus'></i>
                </button>
                <button
                    onClick={removeInput}
                >
                    <i className='fas fa-eraser'></i>
                </button>
            </div>

            <div className="colorBox">
                {color.map((x, i) => <ColorBox
                    key={i * Math.random()}
                    colorMap={x}
                    colorFunc={inputColorHandler}
                />)}
            </div>

            <div className="note-list">
                {notes.map(x => <Note
                    key={x.id}
                    {...x} 
                    onRemove={removeNote}
                    />)}

            </div>
        </>
    )
}

export default NoteApp
