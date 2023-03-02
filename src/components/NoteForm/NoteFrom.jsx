import './NoteForm.css'
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';

export default function NoteForm() {
    const [newNote, setNewNote] = useState({
        text: ''
    })

    function handleChange(evt) {
        // alert(evt.target.text)
        const newNoteForm = {
            text: evt.target.value,
        }
        // alert(newNoteForm.text)
        setNewNote(newNoteForm)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        notesService.addNote(newNote);
        setNewNote({
            text: ''
        })
    }

    return (
        <>
            <h2>New Note</h2>
            <form className="note-form">
                <input className="add-note-text" placeholder="Write note here..." onChange={handleChange} value={newNote.text}/>
                <button className="add-note-button" type="submit" onClick={handleSubmit}>Add Note</button>
            </form>
            <hr></hr>
            <h2>Previous Notes</h2>

        </>
    )
}