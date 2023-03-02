const Note = require('../../models/note')

module.exports = {
    create
}

async function create(req, res) {
    console.log('create function -------------------------------')
    console.log(req.body)
    try {
        const note = await Note.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
    console.log('done? -------------------------------')
}