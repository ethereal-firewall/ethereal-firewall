// utils.js

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
