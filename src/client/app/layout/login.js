(function () {
  'use strict';
  angular.module('app.layout').controller('loginCtrl', function () {
    var vm = this;
    vm.login = function (username, password) {
      console.log("Logging out Login stub" + username + password);
    };
  });

})();