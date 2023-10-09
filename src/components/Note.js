import React, { useContext, useState } from 'react'
import { NoteContext } from '../App';

export default function Note({ note }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="note" onClick={() => setOpen(true)}>
                <h1>{note.title}</h1><hr />
                <p>{note.note}</p>
                {/* <button></button> */}
            </div>
            <Popup open={open} setOpen={setOpen} note={note} />
        </>
    );
}

const Popup = ({ open, setOpen, note }) => {
    const { addNote, setAddNote } = useContext(NoteContext);
    let body = document.querySelector('body');
    body.style.overflow = open ? 'hidden' : '';

    const handleDelete = (id) => {
        setAddNote(addNote.filter((ele) => ele.id !== id));
    }

    return (
        <>
            <div className={`popup_bg ${open ? 'visible' : ''}`} onClick={(e) => {
                if (e.target.className === 'popup_bg visible') setOpen(false);
            }}>
                <div className='popup'>
                    <h3>{note.title}</h3><hr />
                    <p>{note.note}</p>
                </div>
                <button type="submit" onClick={() => handleDelete(note.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </>
    )
}