// mediumsModel.js

module.exports = function (sequelize, DataTypes) {
  var Medium = sequelize.define('Medium', {
    name: DataTypes.STRING,
    iconUrl: DataTypes.STRING
  });

  return Medium;
};
