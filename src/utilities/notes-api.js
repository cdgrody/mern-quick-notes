const BASE_URL = '/api/notes'


export async function addNote(noteData) {
    // console.log('were in the api now')
    const options = {method: 'POST'};
    if (noteData) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(noteData);
    }
    console.log(options)
    const res = await fetch(BASE_URL, options);
    // console.log('that res', res)
    if (res.ok) {
        return res.json();
    }
    throw new Error('Bad Request');
}

export async function getNotes() {
    // console.log('were in the getNote api now')
    const options = {method: 'GET'};
    // console.log(options)
    const res = await fetch(BASE_URL, options);
    // console.log('that res', res)
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

