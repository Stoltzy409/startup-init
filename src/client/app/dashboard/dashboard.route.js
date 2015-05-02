(function (){
  'use strict';
  angular.module('app.dashboard').config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
              templateUrl:'app/dashboard/dashboard.html',
              controller: 'dashboardCtrl'
            }).otherwise('/');
    });
})();
