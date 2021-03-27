const fs = require('fs');
const path = require('path');
const { notes } = require('../../db/db.json');

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.send("api routes are cool");
    });
};

/* function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes: notes }, null, 2)
    );
    return notes;
  };
  
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
  
      let notes = JSON.parse(data);    
      res.json(notes);
    });
  });
  
  app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
  
    const note = createNewNote(req.body, notes);
    res.json(note);
  }); */