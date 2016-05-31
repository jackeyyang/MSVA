var myApp = angular.module('myApp', ['ngRoute','myAppController']);
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/route', {
            templateUrl: 'formVail.html',
            controller: 'myController'
        })
        .when('/event', {
            templateUrl: 'event.html',
            controller: 'loginController'
        })
        .otherwise({
            redirectTo: '/route'
        });
}]);