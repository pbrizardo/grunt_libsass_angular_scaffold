'use strict';

/**
 * @ngdoc overview
 * @name pcApp
 * @description
 * # pcApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider    
      .when('/main', {
        templateUrl: 'views/main.html'
      })  
      .otherwise({
        redirectTo: '/main'
      });
  });
