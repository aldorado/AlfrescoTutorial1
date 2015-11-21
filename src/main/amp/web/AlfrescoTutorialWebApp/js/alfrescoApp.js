var alfrescoApp = angular.module('alfrescoApp', ['ngRoute','ngResource','docModule','patientModule','serviceModule']);

alfrescoApp.config( function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller: 'mainCtrl',
			controllerAs : 'mc'
		})
		.when('/newpatient', {
			templateUrl : 'pages/newpatient.html',
			controller : 'newPatientCtrl',
			controllerAs : 'npc'
		})
		.when('/patientlist', {
			templateUrl : 'pages/patientlist.html',
			controller : 'patientListCtrl',
			controllerAs : 'plc'
		})
		.when('/newdoctor', {
			templateUrl : 'pages/newdoctor.html',
			controller : 'newDoctorCtrl',
			controllerAs : 'ndc'
		})
		.when('/doctorlist', {
			templateUrl : 'pages/doctorlist.html',
			controller : 'doctorListCtrl',
			controllerAs : 'dlc'
		})
		.otherwise({
                redirectTo: '/'
        });

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
});

alfrescoApp.controller('mainCtrl', function () {
	var self = this;
	self.test = "AlfrescoApp, up and running!";
});