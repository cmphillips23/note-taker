const express = require('express');
const PORT = process.env.port || 3001;
const app = express();
const path = require('path');
const fs = require('fs');
const { notes } = require('./db/db.json');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

function createNewNote(body, notes) {
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
});

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection (stays at bottom)
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});