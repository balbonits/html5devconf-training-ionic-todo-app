// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ListCtrl', ['$scope','$ionicListDelegate', function($scope,$ionicListDelegate){
  $scope.items = [];

  // add new item button
  $scope.addNew = function(){
    var name = prompt('What dp you need to do>');
    if(name) $scope.items.push({'name':name});
  }

  //remove selected item button
  $scope.removeItem = function(item){
    $scope.item = item;
    $scope.item['status'] = 'done';
    $ionicListDelegate.closeOptionButtons();
    $scope.item = null;
  }
}])