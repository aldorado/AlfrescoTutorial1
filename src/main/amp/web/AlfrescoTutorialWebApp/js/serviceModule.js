var serviceModule = angular.module('serviceModule', []);

serviceModule.factory('PatientAPI', function ($resource) {
	return $resource('/alfresco/service/api/patient/:id',{ id: '@patientenSVNR'});
});


serviceModule.factory('ArztAPI', function ($resource) {
	return $resource('/alfresco/service/api/arzt/:id', { id: '@id'});
});