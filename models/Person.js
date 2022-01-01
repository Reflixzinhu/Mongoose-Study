const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  age: { type: 'number', required: true },
  dickSize: String,
});

module.exports = mongoose.model('Person', personSchema);
