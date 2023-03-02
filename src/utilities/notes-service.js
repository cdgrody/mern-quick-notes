import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    notesAPI.addNote(noteData)
}