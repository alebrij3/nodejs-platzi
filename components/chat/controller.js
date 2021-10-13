const store = require('./store')

function createChat(users) {
    if(users.length === 0 || !Array.isArray(users)) {
        return Promise.reject('Información inválida');
    }

    const chatUsers = {
        users: users,
    }
    return store.create(chatUsers);
}

function getChats(userId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId))
    })
}

module.exports = {
    createChat,
    getChats,
}
