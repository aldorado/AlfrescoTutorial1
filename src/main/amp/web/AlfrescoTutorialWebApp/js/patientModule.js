var patientModule = angular.module('patientModule', ['serviceModule']);

patientModule.controller('newPatientCtrl', function () {
	var self = this;
	self.versicherungen = ['WGKK','BVA','PVA','SVA'];
	self.geschlechter = ['Männlich','Weiblich'];
	self.blutgruppen = ['A','B','0','AB'];
	self.rhesusfaktoren = ['Positiv', 'Negativ'];
	
	self.patient = {};

	self.submitNewPatient = function () {
		self.output = JSON.stringify(self.patient);
		console.log(JSON.stringify(self.patient));
	};
});

patientModule.controller('patientListCtrl', function () {
	var self = this;
	self.test = "Patientenliste";

	self.patientList = [
		{
			"svnr":"0815",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Beheimgasse 58/10",
			"ort":"Wien",
			"blutgruppe":"A",
			"plz":"1170",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"1234",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"PVA",
			"geschlecht":"Männlich",
			"vorname":"Yesid",
			"nachname":"Suarez",
			"strasse":"Höhnegasse 20",
			"ort":"Wien",
			"blutgruppe":"B",
			"plz":"1180",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"4321",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"SVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Rivera",
			"strasse":"Geigergasse 5",
			"ort":"Wien",
			"blutgruppe":"AB",
			"plz":"1190",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"1111",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Forsthausgasse 20/9/1",
			"ort":"Wien",
			"blutgruppe":"0",
			"plz":"1200",
			"rhesusfaktor":"Negativ"
		}
	];
});