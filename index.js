const express = require('express');
const app = express();
const PORT = '3000';
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');
let args = process.argv.slice(2);

const Person = require('./models/Person');

mongoose.connect('mongodb://localhost/blog', (err, db) => {
  // console.log(err, db);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/links', linkRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

app.listen(PORT, () => {
  console.log(`Server open on port ${PORT}`);
});
