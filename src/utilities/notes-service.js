import * as notesAPI from './notes-api'

export async function addNote(noteData) {
    console.log('NewNote Entered--------------------')
    console.log(noteData)
    notesAPI.addNote(noteData)
}