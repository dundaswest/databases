var db = require('../db');
// require bluebird

// helper functoin:
// write a new promise(resolve, reject) {}
// call query

module.exports = {
  messages: {
    get: function () { db.connect.query('SELECT * FROM messages'); }, // a function which produces all the messages
    post: function (room, userName, text) {
      db.connectPls.query(`INSERT INTO messages (roomId, userId, messageText) VALUES ('${room}','${userName}','${text}');`);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      console.log(name);
      db.connectPls.query(`INSERT INTO users (userName) VALUES('${name}');`);
    }
  }
};

