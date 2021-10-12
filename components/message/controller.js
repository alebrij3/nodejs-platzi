const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[message controller] No hay usuario o mensaje')
      reject('Los datos son incorrectos')
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }

    store.add(fullMessage)
    resolve('Mensaje enviado correctamente')
  })
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function updateMessage(messageId, messageText) {
  return new Promise(async (resolve, reject) => {
    if (!messageId || !messageText) {
      reject('Invalid data')
      return false
    }
    const result = await store.updateMessageText(messageId, messageText);

    resolve(result)
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
}