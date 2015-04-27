angular.module('app.registration').controller('registrationCtrl', function($modal){
  "use strict";
  var vm = this;
  this.openRegistration = function(){
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
});
