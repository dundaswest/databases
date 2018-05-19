var db = require('../db');
// require bluebird

// helper functoin:
// write a new promise(resolve, reject) {}
// call query

module.exports = {
  messages: {
    get: function () { db.connectPls.query('SELECT * FROM messages'); }, // a function which produces all the messages
    post: function (username, roomname, text) {
      // query for userid
      // query for room id
      var roomid = db.connectPls.query(`SELECT id FROM rooms WHERE roomname = ${roomname}`);
      db.connectPls.query(`INSERT INTO messages (userid, roomid, messagetext) VALUES ("${username}","${roomname}","${text}");`);
    } // a function which can be used to insert a message into the database
  },
  //select userid from 
  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      console.log(name);
      db.connectPls.query(`INSERT INTO users (username) VALUES('${name}');`,
        (err, results) => {
          console.log('MODEL USER GET ERR: ', err);
          console.log('MODEL USER GET RESULTS: ', results);
        });
    }
  }
};

