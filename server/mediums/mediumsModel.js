// mediumsModel.js

var db = require('../config/db');

var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Medium = sequelize.define('Medium', {
  name: Sequelize.STRING,
  imgurl: Sequelize.STRING
});

module.exports.Medium = Medium;
