// contactsModel.js

module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    interval: Sequelize.INTEGER,
    nextdate: Sequelize.DATE
  });

  return Contact;
};