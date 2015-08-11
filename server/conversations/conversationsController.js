// conversationsController.js

var utils = require('../config/utils');

module.exports.addConversation = function (req, res) {
  var models = req.app.get('models');
  var Conversation = models.Conversation;

  var record = {
    dateTime: req.body.dateTime,
    summary: req.body.summary,
    ContactId: req.body.ContactId,
    MediumId: req.body.MediumId
  };

  Conversation.sync().then(function () {
    Conversation.create(record)
      .then(function (conversation) {
        utils.sendResponse(res, 201, conversation);
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  })
};

module.exports.getAllConversations = function (req, res) {
  var models = req.app.get('models');
  var Conversation = models.Conversation;

  var contactId = req.contactId;

  Conversation.sync().then(function () {
    Conversation.findAll({
        where: { ContactId: contactId }
      })
      .then(function (conversations) {
        utils.sendResponse(res, 200, conversations);
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  });
};
