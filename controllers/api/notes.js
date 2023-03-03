const Note = require('../../models/note')
const User = require('../../models/user')

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        const note = await Note.create(req.body)
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const user = await User.find({ _id: req.params.user })
        const userId = user[0]._id
        const note = await Note.find({ user: userId });
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}