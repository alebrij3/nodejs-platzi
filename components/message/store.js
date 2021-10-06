// const messageList = []
const db = require('mongoose');
const Model = require('./model');

//mongodb+srv://dbUser:dbUser1234@cluster0.oyr6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//db.Promise = global.Promise;
db.connect('mongodb+srv://dbUser:dbUser1234@cluster0.oyr6m.mongodb.net/dbUser?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

console.log('db conectada con éxito')


function addMessage(message) {
  //messageList.push(message);
  const myMessage = new Model(message);
  myMessage.save()
}

function listMessages() {
  return messageList;
}

module.exports = {
  add: addMessage,
  list: listMessages
}
