const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  username: { type: String, required: true },
  question: { type: String, required: true },
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;