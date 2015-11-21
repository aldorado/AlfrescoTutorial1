var serviceModule = angular.module('serviceModule', []);

serviceModule.factory('PatientAPI', function ($resource) {
	return $resource('/alfresco/service/api/patient');
});


serviceModule.factory('ArztAPI', function ($resource) {
	return $resource('/alfresco/service/api/arzt');
});