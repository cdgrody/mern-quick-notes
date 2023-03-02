const Note = require('../../models/note')

module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log('create function -------------------------------')
    console.log(req.body)
    try {
        const note = await Note.create(req.body)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
    console.log('done? -------------------------------')
}

async function index(req, res) {
    console.log('index function -------------------------------')
    console.log(req.body)
    try {
        const note = await Note.find({});
        console.log(note)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
    console.log('done? -------------------------------')
}