// contactsController.js

var utils = require('../config/utils');

/*
  OPEN ISSUES:
  - Structures of data sent to and from the server
  - How we get contactId and userId from requests
  - then() or spread() for update
  
  I expect everything else will look more or less the same after we resolve those issues.
*/

module.exports.addContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var record = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    interval: req.body.interval,
    nextDate: new Date() + this.interval * 24 * 60 * 60 * 1000,
    userId: req.body.userId
  };

  Contact.sync()
    .create(record)
    .then(function (contact) {
      utils.sendResponse(res, 201, contact);
    })
    .catch(function (err) {
      console.log('Error: ', err);
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
  };

  var contactId = req.params.contactId;

  var options = {
    where: { id: contactId }
  };

  Contact.sync()
    .update(updatedRecord, options)
    .then(function (rows) {
      /* 
        As I understand it, the update method returns a promise, and the callback takes one argument: an array
        containing two elements. The first element is the number of affected rows, which always should be 1. The 
        second element is an array containing the affected records. This sends back a response with the first 
        record in that array.
      */
      var updatedContact = rows[1][0];
      utils.sendResponse(res, 200, updatedContact);
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports.getContact = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var contactId = req.params.contactId;

  Contact.sync()
    .findById(contactId)
    .then(function (contact) {
      utils.sendResponse(res, 200, contact);
    })
    .catch(function (error) {
      console.log('Error: ', err);
    });
};

module.exports.getAllContacts = function (req, res) {
  var models = req.app.get('models');
  var Contact = models.Contact;

  var userId; // GET USER ID SOMEHOW

  Contact.sync()
    .findAll({
      where: { userId: userId }
    })
    .then(function (contacts) {
      utils.sendResponse(res, 200, contact);
    })
    .catch(function (err) {
      console.log('Error: ', err);
    });
};
