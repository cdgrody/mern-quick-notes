import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    const note = await notesAPI.addNote(noteData)
}

export async function getNotes() {
    const notes = await notesAPI.getNotes()
    return notes
}