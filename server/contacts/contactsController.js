// contactsController.js

var utils = require('../config/utils');

module.exports.addContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var nextDate = utils.formatDate(new Date(), req.body.interval);

  var record = {
    firstName: utils.clean(req.body.firstName),
    lastName: utils.clean(req.body.lastName),
    phone: utils.clean(req.body.phone),
    email: utils.clean(req.body.email),
    interval: utils.clean(req.body.interval),
    nextDate: utils.clean(nextDate),
    UserId: utils.clean(req.body.UserId)
  };

  Contact.sync().then(function () {
    Contact.create(record)
      .then(function (contact) {
        utils.sendResponse(res, 201, contact);
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  });
};

module.exports.updateContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var updatedRecord = {
    firstName: utils.clean(req.body.firstName),
    lastName: utils.clean(req.body.lastName),
    phone: utils.clean(req.body.phone),
    email: utils.clean(req.body.email),
    interval: req.body.interval,
    nextDate: utils.clean(req.body.nextDate),
  };

  var contactId = req.params.contactId;

  var options = {
    where: { id: contactId }
  };

  Contact.sync().then(function () {
    Contact.update(updatedRecord, options)
      .then(function (rows) {
        utils.sendResponse(res, 200, 'Contact Updated!');
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  });
};

module.exports.getContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var contactId = req.params.contactId;

  Contact.sync().then(function () {
    Contact.findById(contactId)
      .then(function (contact) {
        if (contact.UserId === req.session.user.id) utils.sendResponse(res, 200, contact);
        else utils.sendResponse(res, 401, 'Contact doesn\'t belong to user!');
      })
      .catch(function (error) {
        console.log('Error: ', err);
      });
  });
};

module.exports.getAllContacts = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var userId = req._data.userId;

  Contact.sync().then(function () {
    Contact.findAll({
        where: { UserId: userId }
      })
      .then(function (contacts) {
        utils.sendResponse(res, 200, contacts);
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  });
};
