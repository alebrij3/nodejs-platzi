// const messageList = []
const db = require('mongoose');


function addMessage(message) {
  messageList.push(message);
}

function listMessages() {
  return messageList;
}

module.exports = {
  add: addMessage,
  list: listMessages
}

//mongodb+srv://dbUser:<password>@cluster0.oyr6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority