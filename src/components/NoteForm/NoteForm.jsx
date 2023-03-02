import './NoteForm.css'
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';

export default function NoteForm({ user }) {
    const [newNote, setNewNote] = useState({
        text: '',
        user: user
    })

    function handleChange(evt) {
        // alert(evt.target.text)
        const newNoteForm = {
            text: evt.target.value,
            user: user
        }
        // alert(newNoteForm.text)
        setNewNote(newNoteForm)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        notesService.addNote(newNote);
        setNewNote({
            text: '',
            user: user
        })
    }

    return (
        <>
            <h2>New Note</h2>
            <form className="note-form">
                <input className="add-note-text" placeholder="Write note here..." onChange={handleChange} value={newNote.text}/>
                <button className="add-note-button" type="submit" onClick={handleSubmit}>Add Note</button>
            </form>
        </>
    )
}