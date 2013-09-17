'use strict';

angular.module('hackdroidApp', ['ngRoute','ngResource', 'ngCookies'])
  .config(function ($routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    $routeProvider
    .when('/', { templateUrl: 'views/index.html',    controller: 'MainCtrl' })
    .when('/categories', { templateUrl: '/categories',    controller: 'MainCtrl' })
    .when('/vhackandroid', { templateUrl: '/vhackandroid',    controller: 'MainCtrl' })
    .when('/pages', { templateUrl: '/pages',    controller: 'MainCtrl' })
    .when('/about', { templateUrl: '/about',    controller: 'MainCtrl' })
        .otherwise({ redirectTo: '/' });
  });
