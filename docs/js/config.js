(function() {

  'use strict';

  angular
  .module('fundsplash.config', [])
  .config(appConfig)
  .run(function($templateCache) {
    $templateCache.removeAll();
  });

  function appConfig($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/home/home.view.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/auth', {
      templateUrl: 'js/components/auth/auth.view.html',
      controller: 'authController',
      controllerAs: 'authCtrl'
    })
    .when('/browse', {
      templateUrl: 'js/components/browse/browse.view.html',
      controller: 'browseController',
      controllerAs: 'browseCtrl'
    })
    .when('/create', {
      templateUrl: 'js/components/create/create.view.html',
      controller: 'createController',
      controllerAs: 'createCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

})();
