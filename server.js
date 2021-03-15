const express = require('express');
const fs = require('fs');
const app = express();
const { db } = require('./db/db');

app.listen(3001, () => {
    console.log('API server now on port 3001!');
});