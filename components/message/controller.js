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

module.exports = {
  addMessage,
  getMessages,
}