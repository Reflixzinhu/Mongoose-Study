const express = require('express');
const app = express();
const PORT = '3000';
const mongoose = require('mongoose');
let args = process.argv.slice(2);

const personSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  age: { type: 'number', required: true },
  dickSize: String,
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({
  name: args[0],
  age: args[1],
  dickSize: args[2],
});

person
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connect('mongodb://localhost/blog', (err, db) => {
  console.log(err);
  //   console.log(db);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server open on port ${PORT}`);
});
