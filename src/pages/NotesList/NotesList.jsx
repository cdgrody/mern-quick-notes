import { useState, useEffect } from 'react'
import NoteForm from "../../components/NoteForm/NoteForm"
import NoteCard from "../../components/NoteCard/NoteCard"
import * as notesService from "../../utilities/notes-service"

export default function NotesList({ notes, user }) {

    const [allNotes, setAllNotes] = useState([])

    async function handleNoteAdded(newNote) {
        const addedNote = await notesService.addNote(newNote)
        setAllNotes([...allNotes, addedNote])
    }

    useEffect(() => {
        async function fetchData() {
            const allNotes = await notesService.getNotes();
            setAllNotes(allNotes);
        }
        fetchData();
    }, []);

    return (
        <>
        <div>Notes List Page</div>
        <NoteForm user={user} handleNoteAdded={handleNoteAdded}/>
        <hr />
{        notes.length ?
        <ul>
            {notes.map((note, idx) => (
                <NoteCard note={note} key={idx}/>
            ))}
        </ul>
        :
        <ul>No notes</ul>}
        </>
    )
}