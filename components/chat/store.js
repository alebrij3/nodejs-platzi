const Model = require("./model");

function createChat(users) {
  const myChat = new Model(users);
  return myChat.save();
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId !== null) {
      console.log(userId);
      filter = { user: userId };
    }
    Model.find(filter)
      .populate("users")
      .exec((err, populatedData) => {
        if (err) {
          reject(err);
        }

        resolve(populatedData);
      });
  });
}

module.exports = {
  create: createChat,
  list: listChats,
};
