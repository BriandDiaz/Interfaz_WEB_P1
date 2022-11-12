const { Router } = require('express')
const router = Router();

const { renderNotesForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote } = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

//New note
router.get('/notes/add',isAuthenticated, renderNotesForm)

router.post('/notes/new-note',isAuthenticated, createNewNote)

//Get All Note
router.get('/notes',isAuthenticated,renderNotes)

//Edit Notes
router.get('/notes/edit/:id',isAuthenticated,renderEditForm)

router.put('/notes/edit/:id',isAuthenticated,updateNote)

//Delete Notes
router.delete('/notes/delete/:id',isAuthenticated, deleteNote)


module.exports = router;