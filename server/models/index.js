var db = require('../db');
// require bluebird

// helper functoin:
// write a new promise(resolve, reject) {}
// call query

module.exports = {
  messages: {
    get: function () { db.connectPls.query('SELECT * FROM messages'); }, // a function which produces all the messages
    post: function (username, roomname, text, callback) {
      // query for userid
      // query for room id
      
      // var roomid = db.connectPls.query(`SELECT id FROM rooms WHERE roomname = '${roomname}'`, function(err, results)
      //     {
      //   if (err) console.log(err);
      //   callback(results);
      //   // return results[0];
      // });
      
      
      // var userid = db.connectPls.query(`SELECT id FROM users WHERE username = '${username}'`, (err, results) => {
      //   if (err) console.log(err);
      //   return results;
      //   // return results[0];
      // });
    
      
      db.connectPls.query(`INSERT INTO messages (userid, roomid, messagetext) VALUES ((SELECT id FROM users WHERE username = '${username}'),(SELECT id FROM rooms WHERE roomname = '${roomname}'),'${text}');`, (err, results) => {
        if (err) { console.log(err); }
      });
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

