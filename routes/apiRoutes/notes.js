const { notes } = require('../../db/db');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    res.json(notes);
});

module.exports = router;