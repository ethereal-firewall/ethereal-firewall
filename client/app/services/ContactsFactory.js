angular.module('followApp')
.factory('ContactsFactory', ['$http', function($http) {

  return {
    getContact : function() {
      // return new Promise(function(resolve, reject) {
      //   resolve(
      //     {
      //       contact: {
      //         firstName: 'Darryl',
      //         lastName: 'Blake',
      //         phone: '+64 22 450 1100',
      //         email: 'darryl@darrylblake.com',
      //         interval: 7,
      //         nextDate: '2015-08-17 10:37:22',
      //       },
      //       conversation: [{
      //         type: 'E',
      //         datetime: '2015-08-17 10:37:22',
      //         summary: 'Chocolate bar sweet roll toffee gingerbread.'
      //       },
      //       {
      //         type: 'E',
      //         datetime: '2015-08-17 10:37:22',
      //         summary: 'Cotton candy cupcake powder sesame snaps. Cotton candy cupcake powder sesame snaps.'
      //       },
      //       {
      //         type: 'E',
      //         datetime: '2015-08-17 10:37:22',
      //         summary: 'Chocolate bar sweet roll toffee gingerbread.'
      //       }],
      //     }
      //   );
      // });
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user + "contacts/" + $rootScope.contact,
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
    addContact : function() {
      return null;
    },

    // get all the user's contacts
    getContacts : function() {
      return new Promise(function(resolve, reject) {
        resolve(
          [
            { firstName: 'Darryl', lastName: 'Blake' },
            { firstName: 'Lauren', lastName: 'Janicki' },
            { firstName: 'Brandon', lastName: 'Lewis' },
            { firstName: 'Xing', lastName: 'Tong' },
            { firstName: 'Alberto', lastName: 'Lyons' },
            { firstName: 'Eloise', lastName: 'Santos' },
            { firstName: 'Evelyn', lastName: 'Brock' },
            { firstName: 'Doreen', lastName: 'Meyer' },
            { firstName: 'Olga', lastName: 'Manning' },
            { firstName: 'Annie', lastName: 'Becker' },
            { firstName: 'Terri', lastName: 'Wilson' },
            { firstName: 'Wanda', lastName: 'Pittman' },
            { firstName: 'Rodolfo', lastName: 'Williams' },
            { firstName: 'Owen', lastName: 'Gross' },
            { firstName: 'Andrew', lastName: 'Reynolds' },
            { firstName: 'Samuel', lastName: 'Bowen' },
            { firstName: 'Elvira', lastName: 'Weber' },
            { firstName: 'Casey', lastName: 'Pierce' },
            { firstName: 'Patti', lastName: 'Richards' },
            { firstName: 'Shelia', lastName: 'Carlson' },
            { firstName: 'Danny', lastName: 'Robinson' },
            { firstName: 'Gwendolyn', lastName: 'Quinn' },
          ]
        );
      });
    },
  };
}]);