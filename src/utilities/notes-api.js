const BASE_URL = '/api/notes'


export async function addNote(noteData) {
    const options = {method: 'POST'};
    if (noteData) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(noteData);
    }
    const res = await fetch(BASE_URL, options);
    if (res.ok) {
        return res.json();
    }
    throw new Error('Bad Request');
}

export async function getNotes(id) {
    const options = {method: 'GET'};
    const res = await fetch(`${BASE_URL}/${id}`, options);
    console.log('that res', res)
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

