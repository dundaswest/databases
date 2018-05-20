var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = req.body;
      console.log(body);
      var params = [body.roomname, body.username, body.message];
      models.messages.post(params, function(err, results) {
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(err, results) {
        res.json(results);
      });
     
    }
  }

};
