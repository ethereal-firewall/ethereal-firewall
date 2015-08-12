// usersController.js

var utils = require('../config/utils');

module.exports.signup = function (req, res, next) {
  var models = req.app.get('models');
  var User = models.User;

  var username = req.body.username;
  var password = req.body.password;

  User.sync().then(function () {
    User.findOrCreate({
      where: { username: username },
      defaults: { password: password }
    })
    .spread(function (user, created) {
      if (created) {
        utils.hashPassword(password, function (hash) {
          user.password = hash;
          user.save().then(function (user) {
            delete user.password;
            utils.createSession(req, user, function () {
              utils.sendResponse(res, 201, user);
            });
          });
        });
      } else {
        utils.sendResponse(res, 403, 'User Already Exists!');
      }
    })
    .catch(function (err) {
      console.log('Error: ', err);
    });
  });
};

module.exports.signin = function (req, res, next) {
  var models = req.app.get('models');
  var User = models.User;

  var username = req.body.username;
  var password = req.body.password;

  User.sync().then(function () {
    User.find({
      where: { username: username }
    })
    .then(function (user) {
      utils.comparePassword(password, user.password, function (isMatch) {
        if (isMatch) {
          delete user.password;
          utils.createSession(req, user, function () {  
            utils.sendResponse(res, 200, user);
          });
        } else {
          utils.sendResponse(res, 401, 'Invalid Credentials');
        }
      });
    })
  });
};

module.exports.checkSignedIn = function (req, res, next) {
  utils.checkSession(req, function (user) {
    if (user) utils.sendResponse(res, 200, user);
    else utils.sendResponse(res, 401, null);
  });
};
