var patientModule = angular.module('patientModule', []);

patientModule.controller('newPatientCtrl', function (PatientAPI) {
	var self = this;
	self.versicherungen = ['WGKK','BVA','PVA','SVA'];
	self.geschlechter = ['M\u00E4nnlich','Weiblich'];
	self.blutgruppen = ['A','B','0','AB'];
	self.rhesusfaktoren = ['positiv', 'negativ'];
	
	self.patient = {};

	self.submitNewPatient = function () {

		PatientAPI.save(self.patient);

		self.output = JSON.stringify(self.patient);
		console.log(JSON.stringify(self.patient));
	};
});

patientModule.controller('patientListCtrl', function (PatientAPI) {
	var self = this;
	self.test = "Patientenliste";
	self.patientList = PatientAPI.query();

	self.deletePatient = function (index) {
		self.patientList[index].$delete();
		self.patientList.splice(index, 1);
	}
});