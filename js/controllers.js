'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('Index', [function() {
  }])
  .controller('Contact', [function() {
  }])
  .controller('About', [function() {
  }])
  .controller('Login', function($scope, angularFire, angularFireAuth) {
    var ref = new Firebase("https://<my-firebase>.firebaseio.com/");
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});
  })
  .controller('Blog', function ($scope) {
    // TODO get this data from:
    //$resource([, paramDefaults][, actions]);
    // http://www.mocky.io/v2/52a7b947decb7923022bdd46
    $scope.posts = [
      {
        "title": "post 1", "created_at": "2013-03-11T20:44:55",
        "updated_at": "2013-04-11T20:44:65", "author": "Henry Jenkins",
        "text": "This is the content for post 1"
      },
      {
        "title": "post 2", "created_at": "2013-04-12T20:44:55",
        "updated_at": "2013-04-12T20:44:55", "author": "Henry Jenkins",
        "text": "This is the content for post 2"
      }
    ];
  });
