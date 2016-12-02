(function() {

  'use strict';

  angular
    .module('fundsplash.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['$scope', '$http', '$rootScope'];

  function authController($scope, $http, $rootScope) {
    /*jshint validthis: true */

    $http.get('http://localhost:3000/profile')
    .then((user) => {
      console.log(user.data);

      const token = user.data.access_token;
      sessionStorage.setItem('token', token);

      console.log(sessionStorage.getItem('token'));

      $rootScope.user = user.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

})();
