// utils.js

exports.sendResponse = function (res, statusCode, data) {
  res.status(statusCode);
  res.json(data);
  res.end();
};

// exports.paramHandler = function(app, req, res, param, paramName) {
//   app.param(param, function(req, res, next, param, paramName) {
//     req[paramName] = param;
//     next();
//   });
// }
