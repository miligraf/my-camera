(function() {

  var app = angular.module('starter', ['ionic', 'ngCordova']);

  app.controller('CameraCtrl', function($scope) {
    $scope.pictureUrl = 'http://placehold.it/300x300';

    $scope.takePicture = function() {

    };
    
  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

}());