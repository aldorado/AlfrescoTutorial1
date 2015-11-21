var docModule = angular.module('docModule', []);

docModule.controller('newDoctorCtrl', function (ArztAPI) {
	var self = this;
	self.arzt = {};

	self.arzt.arztVorname = "";
	self.arzt.arztNachname = "",
	self.arzt.arztFachbereich = [""];

	self.addFachbereich = function () {
		self.arzt.arztFachbereich.push('');
	};

	self.removeFachbereich = function () {
		self.arzt.arztFachbereich.pop();
	};

	self.submitNewDoctor = function () {
		//Not yet implemented, just testcontent

		ArztAPI.save(self.arzt);

		self.output = JSON.stringify(self.arzt);
		console.log(self.output);
	};

});

docModule.controller('doctorListCtrl', function (ArztAPI) {
	var self = this;
	self.test = "Aerzteliste";

	self.docList = ArztAPI.query();

});