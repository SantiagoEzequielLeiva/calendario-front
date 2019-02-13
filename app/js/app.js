var app = angular.module("calendario", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", { controller : "HomeController", templateUrl : "./js/views/home.html" })
	.otherwise({ redirectTo : "/" });
});