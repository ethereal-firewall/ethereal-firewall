// usersModel.js

var db = require('../config/db');
var Contact = require('../contacts/contactsModel');

var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

User.hasMany(Contact);
Contact.belongsTo(User);

module.exports.User = User;