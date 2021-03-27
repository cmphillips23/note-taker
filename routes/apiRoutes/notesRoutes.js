const fs = require('fs');
const shortid = require('shortid');

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.send("api routes are cool");
    });

    app.post('/api/notes', (req, res) => {
        let note = { title: req.body.title, text: req.body.text, id: shortid.generate() }
        console.log(note);
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