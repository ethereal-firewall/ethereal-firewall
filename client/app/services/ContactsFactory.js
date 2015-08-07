angular.module('followApp')
.factory('ContactsFactory', function($http) {

  // get a single user contact/summary
  var getContact = function() {
    return null;
  };

  // change a single user contact info
  var setContact = function() {
    return null;
  };

  // add a new contact to the user
  var addContact = function() {
    return null;
  };

  // get all the user's contacts
  var getContacts = function() {
    return null;
  };

  return {
    getContact: getContact,
    setContact: setContact,
    addContact: addContact,
    getContacts: getContacts,
  };
})