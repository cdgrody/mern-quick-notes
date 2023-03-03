import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    const note = await notesAPI.addNote(noteData)
    return note
}

export async function getNotes(id) {
    const notes = await notesAPI.getNotes(id)
    return notes
}