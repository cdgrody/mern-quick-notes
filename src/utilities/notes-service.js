import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    const note = await notesAPI.addNote(noteData)
    return note
}

export async function getNotes() {
    const notes = await notesAPI.getNotes()
    return notes
}