const Note = require('../../models/note')

module.exports = {
    create
}

async function create(req, res) {
    console.log('create function -------------------------------')
    console.log(req.body)
}