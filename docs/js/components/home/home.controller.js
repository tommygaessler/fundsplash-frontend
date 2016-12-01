(function() {

  'use strict';

  angular
    .module('fundsplash.components.home', [])
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$location', '$http'];

  function homeController($scope, $location, $http) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    // var code = $location.absUrl()
    // .replace('http://localhost:8888/?code=', '')
    // .replace('#/', '')
    //
    // $http.post('http://localhost:3000/auth', {code})
    // .then((data) => {
    //   console.log(data);
    // })
  }

})();
