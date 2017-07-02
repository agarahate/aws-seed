var App = angular.module('AWSapp', ['ngRoute']);	
App.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider	) {
    $routeProvider
	    .when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/file', {
			templateUrl: 'views/file.html',
			controller: 'fileCtrl'
		})
		.when('/edit', {
			templateUrl: 'views/edit.html',
			controller: 'editCtrl'
		})
    	.otherwise({
    		redirectTo: '/dashboard'
    	});
}]);