'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {templateUrl: 'partials/blog.html', controller: 'Blog'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'About'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'Contact'});
  $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'Index'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
