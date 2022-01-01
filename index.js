const express = require('express');
const app = express();
const PORT = '3000';
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
let args = process.argv.slice(2);

const Person = require('./models/Person');

// let person = new Person({
//   name: args[0],
//   age: args[1],
//   dickSize: args[2],
// });

// person
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let link = new Link({
//   title: 'Twitter',
//   description: 'Esse é meu twitter',
//   url: 'https://twitter.com/Reflixzinhu',
// });

// link
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoose.connect('mongodb://localhost/blog', (err, db) => {
  console.log(err, db);
  //   console.log(db);
});

app.use('/links', linkRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server open on port ${PORT}`);
});
