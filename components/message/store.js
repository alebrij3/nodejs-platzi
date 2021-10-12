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

async function updateMessageText(messageId, messageText) {
  const foundMessage = await Model.findOne({
    _id: messageId,
  })
  foundMessage.message = messageText;
  const newMessage = await foundMessage.save()
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: listMessages,
  updateMessageText: updateMessageText,
}
