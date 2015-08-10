// contactsModel.js

module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    interval: DataTypes.INTEGER,
    nextDate: DataTypes.DATE
  });

  return Contact;
};
