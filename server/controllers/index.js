var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = req.body;
      models.messages.post(body.roomname, body.username, body.message);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { console.log(req.body); },
    post: function (req, res) {
      models.users.post(req.body.username);
      res.send();
    }
  }
};

