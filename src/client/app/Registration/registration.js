(function () {
  'use strict';

  angular.module('app.registration').controller('registrationCtrl', function () {
    var vm = this;
    var isChecked = vm.checked = false;
    vm.agree = 'glyphicon-unchecked';
    vm.agreeBtnClicked = function () {
      vm.agree = '';
      isChecked = !isChecked;
      vm.agree = isChecked ? 'glyphicon-check' : 'glyphicon-unchecked';
    };
  });
})();