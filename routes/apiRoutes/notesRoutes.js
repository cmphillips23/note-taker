const fs = require('fs');
const shortid = require('shortid');

module.exports = (app) => {
    app.get('/api', (req, res) => res.send("api routes are cool"));

    app.post('/api/notes', (req, res) => {
        let note = { title: req.body.title, text: req.body.text, id: shortid.generate() }
        let newData = JSON.stringify(note);

        fs.writeFile('./db/db.json', newData, err => {
            if (err) throw err;
            res.json(newData);
        });
    });
};