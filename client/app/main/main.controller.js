'use strict';

angular.module('buffalotechslackApp')
  .controller('MainCtrl', ["$scope", "$http", function (scope, http) {
  scope.submitEmail = function () {
    if (scope.inviteForm.$valid) {
      http.post("/api/sendInvite", { email: scope.inviteEmail })
        .success(function (data, status, headers, config) {
        scope.emailSent = true;
      })
        .error(function (data, status, headers, config) {
        scope.emailError = true;
      });
    }
  };
}]);
