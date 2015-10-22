// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase','ngCordova'])

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

.factory('ItemsFactory',['$firebaseArray',function($firebaseArray){
  var todoRef = new Firebase('https://blistering-heat-1902.firebaseio.com/todos');

  return $firebaseArray(todoRef);
}])

.controller('ListCtrl', ['$scope','$ionicListDelegate','$cordovaDialogs','ItemsFactory', function($scope,$ionicListDelegate,$cordovaDialogs,ItemsFactory){
  $scope.items = ItemsFactory;

  // add new item button
  $scope.addNew = function(){
    $cordovaDialogs.prompt('What do you need to do?','New Task',['Cancel','Add'],'')
    .then(function(result){
      if(result.buttonIndex == 2) {
        $scope.items.$add({'name':result.input1});
      }
    });
  }

  //remove selected item button
  $scope.markItem = function(item){
    var todoRef = new Firebase('https://blistering-heat-1902.firebaseio.com/todos/' + item.$id);
    todoRef.child('status').set('done');
    $ionicListDelegate.closeOptionButtons();
  }
}])