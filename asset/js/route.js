var myApp = angular.module('myApp', ['ngRoute','myAppController'])
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
// myApp.controller('myController', function($scope,$rootScope) {
//     $scope.$watch('site', function() {
//         $rootScope.globle = $scope.site;
//         console.log($rootScope.globle);
//     });
// });
// myApp.controller('loginController',function($scope,$rootScope){
//     $scope.bsr = $rootScope.globle;
//     console.log($scope.bsr);
// })