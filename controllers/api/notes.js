const Note = require('../../models/note')
const User = require('../../models/user')

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        console.log(req.body)
        console.log(User.find({}))
        console.log('create function >>>>>>>>>>>>>>')
        const note = await Note.create(req.body)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const note = await Note.find({});
        console.log(note)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}