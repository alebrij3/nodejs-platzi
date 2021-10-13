const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  date: Date,
})

const model = mongoose.model('Messages', mySchema);

module.exports = model;
