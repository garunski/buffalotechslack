'use strict';

angular.module('buffalotechslackApp')
  .controller('MainCtrl', ["$scope", "$http", function (scope, shttp) {
  scope.submitEmail = function () {
    if(scope.inviteForm.$valid){
    console.log(scope.inviteEmail);
    }
  }
}]);
