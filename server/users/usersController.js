// usersController.js

var utils = require('../config/utils');

var addUser = function (req, res, next) {
  var models = req.app.get('models');
  var User = models.User;

  var username = req.body.username;
  var password = req.body.password;

  User.sync().then(function () {
    User.findOrCreate({
      where: { username: username }
    })
    .spread(function (user, created) {
      if (created) {
        utils.sendResponse(res, 201, user);
      } else {
        utils.sendResponse(res, 200, user);
      }
    })
    .catch(function (err) {
      console.log('Error: ', err);
    });
  });
};
