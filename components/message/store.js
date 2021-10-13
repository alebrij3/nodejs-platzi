const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save()
}

function listMessages(filterMessages) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterMessages !== null) {
      filter = { user: filterMessages }
    }
    Model.find(filter)
      .populate('user')
      .exec((err, populatedData) => {
        if (err) {
          reject(err);
        }

        resolve(populatedData);
      })
  })
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
