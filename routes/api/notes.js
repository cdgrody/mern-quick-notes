const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/notes

router.post('/', notesCtrl.create);
router.get('/', notesCtrl.index);
// router.post('/login', usersCtrl.login);
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router;
