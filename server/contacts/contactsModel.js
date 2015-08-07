// contactsModel.js

var db = require('../config/db');
var Conversation = require('../conversations/conversationsModel');

var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Contact = sequelize.define('Contact', {
  name: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  interval: Sequelize.INTEGER,
  nextdate: Sequelize.DATE
});

Contact.hasMany(Conversation);
Conversation.belongsTo(Contact);

module.exports.Contact = Contact;