(function () {
  'use strict';
  angular.module('app.layout').controller('loginCtrl', function ($log) {
    var vm = this;

    vm.status = {
      isopen: false
    };

    vm.toggled = function (open) {
      $log.log('Dropdown is now: ', open);
    };

    vm.stopProp = function ($event) {
      //$event.preventDefault();
      $event.stopPropagation();
    };

    vm.login = function ($event) {
      console.log(vm.username + ' ' + vm.password);
      $event.stopPropagation();
    };

  });

})();