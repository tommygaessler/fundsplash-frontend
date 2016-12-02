(function() {

  'use strict';

  angular
    .module('fundsplash.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['$scope', '$http', '$rootScope'];

  function authController($scope, $http, $rootScope) {
    /*jshint validthis: true */
  }

})();
