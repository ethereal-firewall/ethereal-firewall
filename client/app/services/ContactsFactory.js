angular.module('followApp')
.factory('ContactsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  return {
    getContact : function(contactId) {
      
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user.id + "/contacts/" + contactId,
      })
      .then(function(res) {
        return res.data;
      })
    },
      

    // change a single user contact info
    setContact : function(contactId, update) {
      return $http({
        method: "PUT",
        url: '/users/' + $rootScope.user.id + '/contacts/' + contactId,
        data: update,
      })
      .then(function(res) {
        return res.data;
      })
    },

    // add a new contact to the user
    addContact : function(contact) {
      return $http({
        method: "POST",
        url: "/users/" + $rootScope.user.id + "/contacts",
        data: contact,
      })
      .then(function(res) {
        return res.data;
      })
    },

    // get all the user's contacts
    getContacts : function() {
      
      return $http({
        method: "GET",
        url: '/users/' + $rootScope.user.id + '/contacts',
      })
      .then(function(res) {
        return res.data;
      });
    },
  };
}]);