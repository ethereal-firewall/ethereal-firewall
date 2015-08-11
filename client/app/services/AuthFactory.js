angular.module('followApp')
.factory('AuthFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Signin
  return {

    // Signin
    signin : function(user) {
      return $http({
        method: "POST",
        url: "/users/signin",
        data: user,
      })
      .then(function(res) {
        return res.data;
      });
    },

    // Signup
    signup : function(user) {
      return $http({
        method: "POST",
        url: "/users/signup",
        data: user,
      })
      .then(function(res) {
        return res.data;
      });
    },

    // Signout
    signout : function() {
      return null;
    },

    isAuth : function() {
      if ($rootScope.user != null) {
        return true;
      }
      else {
        return false;
      }
    }

  };

}]);