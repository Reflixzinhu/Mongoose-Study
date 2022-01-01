const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  title: { type: 'string', required: true },
  description: String,
  url: { type: 'string', required: true },
  click: { type: 'number', default: 0 },
});

module.exports = mongoose.model('Link', linkSchema);
