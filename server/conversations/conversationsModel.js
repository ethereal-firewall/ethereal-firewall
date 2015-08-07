// conversationsModel.js

module.exports = function (sequelize, DataTypes) {
  var Conversation = sequelize.define('Conversation', {
    datetime: DataTypes.DATETIME,
    summary: DataTypes.TEXT
  });

  return Conversation;
};
