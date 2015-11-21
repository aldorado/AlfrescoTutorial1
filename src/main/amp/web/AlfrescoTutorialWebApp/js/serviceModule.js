var serviceModule = angular.module('serviceModule', []);

serviceModule.factory('PatientAPI', function ($resource) {
	return $resource('/alfresco/patient/:id');
});


serviceModule.factory('ArztAPI', function ($resource) {
	return $resource('http://localhost:8080/alfresco/service/api/arzt');
});