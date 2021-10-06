const messageList = []

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