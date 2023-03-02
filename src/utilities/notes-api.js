const BASE_URL = '/api/notes'


export async function addNote(noteData) {
    console.log('were in the api now')
    // console.log(noteData)

    const options = {method: 'POST'};
    if (noteData) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(noteData);
    }
    console.log(options)
    const res = await fetch(BASE_URL, options);
    console.log(res)
    if (res.ok) {
        console.log('END of api again');
        return res.json();
    }
    throw new Error('Bad Request');
}