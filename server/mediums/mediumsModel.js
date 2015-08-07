// mediumsModel.js

module.exports = function (sequelize, DataTypes) {
  var Medium = sequelize.define('Medium', {
    name: Sequelize.STRING,
    imgurl: Sequelize.STRING
  });

  return Medium;
};
