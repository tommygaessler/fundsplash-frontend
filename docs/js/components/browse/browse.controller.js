(function() {

  'use strict';

  angular
    .module('fundsplash.components.browse', [])
    .controller('browseController', browseController);

  browseController.$inject = ['$scope'];

  function browseController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
