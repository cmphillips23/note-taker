const express = require('express');
const PORT = process.env.port || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes/notesRoutes')(app);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection (stays at bottom)
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});