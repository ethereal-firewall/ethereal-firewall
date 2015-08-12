// utils.js

var bcrypt = require('bcrypt-nodejs');

exports.sendResponse = function (res, statusCode, data) {
  res.status(statusCode);
  res.json(data);
  res.end();
};

exports.formatDate = function (date, interval) {
  date = Date.now() + interval * 86400000 - date.getTimezoneOffset() * 60000;
  date = (new Date(date)).toISOString().substring(0, 19).replace('T', ' ');
  return date;
};

exports.hashPassword = function (password, callback) {
  bcrypt.genSalt(null, function (err, salt) {
    bcrypt.hash(password, salt, null, function (err, hash) {
      callback(hash);
    });
  });
};

exports.comparePassword = function (password, hash, callback) {
  bcrypt.compare(password, hash, function (err, isMatch) {
    callback(isMatch);
  });
};

exports.createSession = function (req, username, callback) {
  return req.session.regenerate(function () {
    req.session.user = user;
    callback();
  });
};

exports.checkSession = function (req, callback) {
  if (req.session) {
    callback(req.session.user);
  } else {
    callback(null);
  }
};
