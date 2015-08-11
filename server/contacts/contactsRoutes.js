var contactsController = require('./contactsController.js');

module.exports = function(app) {

  app.route('/:contactId')
    .get(contactsController.getContact)
    .put(contactsController.updateContact);

  app.route("/")
    .get(contactsController.getAllContacts)
    .post(contactsController.addContact);
};