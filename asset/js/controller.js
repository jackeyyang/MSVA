var myAppController = angular.module('myAppController', []);

    myAppController.controller('myController', function($scope) {
        $scope.$watch('site', function() {
            console.log("a");
        });
    });

    myAppController.controller('loginController',function($scope,$location){

    })
