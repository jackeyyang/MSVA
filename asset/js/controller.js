var myAppController = angular.module('myAppController', []);

    myAppController.controller('myController', function($scope,$rootScope) {
        // $scope.$watch('site', function() {
        //     $rootScope.globle = $scope.site;
        //     console.log($rootScope.globle);
        // });
        // 
  //       var n = 9999999.01;
		// function changeTo(numbers){			
		// 	return (numbers+'').replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g,"$1,");
		// }

		// var newN = changeTo(n);
		// console.log(newN);
		
		function handlerWrapper(i) {
		   return function() {
		      console.log('You clicked element #' + i);
		   }
		}
		 
		var nodes = document.getElementsByTagName('button');
		for (var i = 0; i <nodes.length; i++) {
		   nodes[i].addEventListener('click', handlerWrapper(i));
		}
		
		// function fun(n,o){
		// 	console.log(o);
		// 	return {
		// 		fun: function(m){
		// 			return fun(m,n);
		// 		}
		// 	}
		// };

		// var b = fun(0).fun(1).fun(2).fun(3);
		// 
		// 
		// var str = "jackey088222ABCDEFGHIJKLMNOPQRSTUVWXYZsaysabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;|?.,><";
		// console.log(str.match(/^jackey[0-9]*/g));
		
		// var arr1 =[1,2,2,2,3,3,3,4,5,6],arr2 = [];
		// var n = {};
		// for(var i = 0; i < arr1.length; i++){
		// 	if(!n[arr1[i]]){
		// 		n[arr1[i]] = "0";
		// 		arr2.push(arr1[i]);
		// 	}
		// }

		// console.log(n);
		// console.log(arr2);
		// 
// 		function animal(){
// 			this.species = "动物";
// 		}
// 		function cat(){
// 			this.name = name;
// 　　　　	this.color = color;
// 		}

// 		console.log(cat.prototype.__proto__);
// 		console.log(cat.__proto__);
// 		
		// var arrays = [{id:1},{id:8},{id:5},{id:9},{id:11},{id:10},{id:4},{id:2},{id:3}];

		// arrays.sort(function(a,b){
		// 	console.log(a.id+','+b.id);
		// 	return a.id - b.id;
		// });

		// console.log(arrays);\
		
		var student = new Object();
		student.name = "Lanny";
		student.age = "25";
		student.location = "China";
		var json = JSON.stringify(student);
		alert(student); 
		
		// function Foo(y){
		// this.y = y ;
		// }

		// Foo.prototype.x = 10;

		// Foo.prototype.calculate = function(z){
		// return this.x+this.y+z;
		// };

		// var b = new Foo(20);

		// alert(b.calculate(30)); 
	

    });

    myAppController.controller('loginController',function($scope,$rootScope){
    	$scope.bsr = $rootScope.globle;
    	console.log($scope.bsr);
    })
