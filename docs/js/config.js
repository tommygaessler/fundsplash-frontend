(function() {

  'use strict';

  angular
  .module('fundsplash.config', ['satellizer'])
  .config(appConfig)
  .run(function($templateCache) {
    $templateCache.removeAll();
  });

  function appConfig($routeProvider, $locationProvider, $authProvider) {

    $authProvider.oauth2({
      name: 'unsplash',
      url: 'https://evening-badlands-56838.herokuapp.com/auth',
      clientId: '2c9aa4160523a0848dc028d33ed50635abaa5d8a5f360a58d5760d8ebdedfac6',
      redirectUri: 'http://fundsplash.com',
      requiredUrlParams: ['scope', 'redirect_uri', 'client_id', 'response_type'],
      scope: ['public', 'write_likes', 'write_followers', 'read_user'],
      scopePrefix: '',
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://unsplash.com/oauth/authorize'
    });

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
