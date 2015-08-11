var utils = require('../config/utils');

module.exports.getMediums = function(req, res) {
  var models = req.app.get('models');
  var Medium = models.Medium;

  Medium.sync().then(function () {
    Medium.findAll({})
      .then(function(mediums) {
        utils.sendResponse(res, 200, mediums);
      })
      .catch(function(err) {
        console.log('Error: ', err);
      });
  });
};