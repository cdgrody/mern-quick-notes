import sendRequest from './send-request'
const BASE_URL = '/api/notes'


export function addNote(noteData) {
    console.log('were in the api game now')
    console.log(noteData)
    return sendRequest(`${BASE_URL}`, 'Post', noteData)
}