angular.module('followApp')
.factory('ContactsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  return {
    getContact : function() {
      
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user.id + "contacts/" + $rootScope.contact.id,
      })
      .then(function(res) {
        return res.data;
      })
    },
      

    // change a single user contact info
    setContact : function() {
      return null;
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