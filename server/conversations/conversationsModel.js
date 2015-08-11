// conversationsModel.js

module.exports = function (sequelize, DataTypes) {
  var Conversation = sequelize.define('Conversation', {
    dateTime: DataTypes.DATETIME,
    summary: DataTypes.TEXT
  });

  return Conversation;
};
