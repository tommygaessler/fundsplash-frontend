(function() {

  'use strict';

  angular
    .module('fundsplash.components.home', [])
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$location', '$http'];

  function homeController($scope, $location, $http) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
