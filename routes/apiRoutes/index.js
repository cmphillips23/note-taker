const fs = require('fs');
const shortid = require('shortid');
const router = require('express').Router();

router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post('/notes', (req, res) => {
    let note = { title: req.body.title, text: req.body.text, id: shortid.generate() }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let noteString = JSON.parse(data);
        noteString.push(note);
        let newData = JSON.stringify(noteString);
        
        fs.writeFile('./db/db.json', newData, err => {
            if (err) throw err;
            res.json(newData);
        });
    });
});

module.exports = router;