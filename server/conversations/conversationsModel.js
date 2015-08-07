// conversationsModel.js

var db = require('../config/db');
var Medium = require('../mediums/mediumsModel');

var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Conversation = sequelize.define('Conversation', {
  datetime: Sequelize.DATETIME,
  summary: Sequelize.TEXT
});

Conversation.hasMany(Medium);
Medium.belongsTo(Conversation);

module.exports.Conversation = Conversation;
