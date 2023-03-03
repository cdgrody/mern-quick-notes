import './NoteForm.css'
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';

export default function NoteForm({ user, handleNoteAdded }) {
    const [newNote, setNewNote] = useState({
        text: '',
        user: user
    })

    function handleChange(evt) {
        const newNoteForm = {
            text: evt.target.value,
            user: user
        }
        setNewNote(newNoteForm)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const addedNote = await notesService.addNote(newNote);
        setNewNote({
            text: '',
            user: user
        })
        handleNoteAdded(addedNote)
      }

    return (
        <>
            <h2>New Note</h2>
            <form className="note-form">
                <input className="add-note-text" placeholder="Write note here..." onChange={handleChange} value={newNote.text}/>
                <button className="add-note-button" type="submit" onClick={handleSubmit}>Add Note</button>
                <div>{user.name}</div>
            </form>
        </>
    )
}