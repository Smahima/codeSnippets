const mongoose = require('mongoose');

const snippetsSchema = new mongoose.Schema({
    title: { type: String, required: true},
    code: { type: String, required: true},
    notes: [String],
    language: [String],
    tags: [String]
})

const code = mongoose.model('snippets', snippetsSchema);

module.exports = code;
