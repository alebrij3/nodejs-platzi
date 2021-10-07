// const messageList = []
require('dotenv').config();
const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect(process.env.DB_URI, {
  useNewUrlParser: true,
})

console.log('db conectada con éxito')


function addMessage(message) {
  //messageList.push(message);
  const myMessage = new Model(message);
  myMessage.save()
}

async function listMessages() {
  // return messageList;
  const messageList = await Model.find()
  return messageList;
}

module.exports = {
  add: addMessage,
  list: listMessages
}
