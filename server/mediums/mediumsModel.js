// mediumsModel.js

module.exports = function (sequelize, DataTypes) {
  var Medium = sequelize.define('Medium', {
    name: DataTypes.STRING,
    iconurl: DataTypes.STRING
  });

  return Medium;
};
