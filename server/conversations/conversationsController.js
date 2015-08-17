// conversationsController.js

var utils = require('../config/utils');

module.exports.addConversation = function (req, res) {
  var models = req.app.get('models');
  var Conversation = models.Conversation;
  var Contact = models.Contact;

  var record = {
    dateTime: utils.clean(req.body.dateTime),
    summary: utils.clean(req.body.summary),
    ContactId: utils.clean(req.body.ContactId),
    MediumId: utils.clean(req.body.MediumId)
  };

  Contact.sync().then(function () {
    Contact.findById(record.ContactId).then(function (contact) {
      if (contact.UserId === req.session.user.id) {
        Conversation.sync().then(function () {
          Conversation.create(record)
            .then(function (conversation) {
              utils.sendResponse(res, 201, conversation);
            })
            .catch(function (err) {
              console.log('Error: ', err);
            });
        });
      } else {
        utils.sendResponse(res, 401, 'Contact doesn\'t belong to user!');
      }
    });
  });
};

module.exports.getAllConversations = function (req, res) {
  var models = req.app.get('models');
  var Conversation = models.Conversation;
  var Contact = models.Contact;

  var contactId = req._data.contactId;

  Contact.sync().then(function () {
    Contact.findById(contactId).then(function (contact) {
      if (contact.UserId === req.session.user.id) {
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
      } else {
        utils.sendResponse(res, 401, 'Contact doesn\'t belong to user!');
      }
    });
  });
};
