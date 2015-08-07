// conversationsModel.js

module.exports = function (sequelize, DataTypes) {
  var Conversation = sequelize.define('Conversation', {
    datetime: Sequelize.DATETIME,
    summary: Sequelize.TEXT
  });

  return Conversation;
};
