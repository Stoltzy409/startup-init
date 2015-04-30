(function () {
  "use strict";
  angular.module('app.registration').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/registration', {
        templateUrl: 'app/registration/registration.html',
        controller: 'registrationCtrl'
      }).otherwise('/');
  });
})();