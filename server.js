const express = require('express');
const fs = require('fs');
const app = express();
const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(3001, () => {
    console.log('API server now on port 3001!');
});