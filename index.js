const express = require('express');
const app = express();
const PORT = '3000';
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');

mongoose.connect('mongodb://localhost/blog', (err, db) => {});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/links', linkRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Usei pra colocar o CSS no server.
app.use('/public', express.static('public'));

app.listen(PORT, () => {
  console.log(`Server open on port ${PORT}`);
});
