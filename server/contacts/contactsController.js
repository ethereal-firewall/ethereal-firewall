// contactsController.js

var utils = require('../config/utils');

module.exports.addContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var nextDate = utils.formatDate(new Date(), req.body.interval);

  var record = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    interval: req.body.interval,
    nextDate: nextDate,
    UserId: req.body.UserId
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
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    interval: req.body.interval,
    nextDate: req.body.nextDate,
  };

  var contactId = req._data.contactId;

  var options = {
    where: { id: contactId }
  };

  Contact.sync().then(function () {
    Contact.update(updatedRecord, options)
      .then(function (rows) {
        utils.sendResponse(res, 200, 'Contact Updated!');
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};

module.exports.getContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var contactId = req._data.contactId;

  Contact.sync().then(function () {
    Contact.findById(contactId)
      .then(function (contact) {
        utils.sendResponse(res, 200, contact);
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
