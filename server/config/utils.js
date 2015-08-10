// utils.js

module.exports.sendResponse = function (res, statusCode, data) {
  res.status(statusCode);
  res.json(data);
  res.end();
};