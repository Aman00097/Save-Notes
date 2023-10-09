import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../App';

const CreateNote = () => {
    const [note, setNote] = useState({ title: '', note: '' });
    const { addNote, setAddNote } = useContext(NoteContext);

    useEffect(() => {
        localStorage.setItem('note', JSON.stringify(addNote));
    }, [addNote])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.values(note).includes('')) {
            let id = new Date().getTime();
            setAddNote([{ id: id, ...note }, ...addNote]);
            setNote({ title: '', note: '' });
        } else {
            alert('Please enter a note');
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="add_note">
                    <input type="text" placeholder="Title" autoComplete='off' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} /><hr />
                    <textarea cols="40" rows="5" placeholder="Write a note" value={note.note} onChange={(e) => setNote({ ...note, note: e.target.value })}></textarea>
                </div>
                <button type="submit">+</button>
            </form>
        </>
    )
}
export default CreateNote;
