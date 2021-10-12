const Model = require('./model');

function addMessage(message) {
  //messageList.push(message);
  const myMessage = new Model(message);
  myMessage.save()
}

async function listMessages(filterMessages) {
  let filter = {}
  if (filterMessages !== null) {
    filter = { user: filterMessages }
  }
  const messageList = await Model.find(filter)
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

async function deleteMessage(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: listMessages,
  updateMessageText: updateMessageText,
  remove: deleteMessage,
}
