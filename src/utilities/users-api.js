import sendRequest from './send-request'
const BASE_URL = '/api/users'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

export function addNote(noteData) {
    console.log('were in the api game now')
    console.log(noteData)
    return sendRequest(`${BASE_URL}/notes`, 'Post', noteData)
}