const fs = require('fs');
const shortid = require('shortid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let note = JSON.parse(data);
            res.json(note);
        });
    });

    app.post('/api/notes', (req, res) => {
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
};
