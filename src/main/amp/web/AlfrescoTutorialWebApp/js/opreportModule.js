var opReportModule = angular.module('opReportModule', []);

opReportModule.controller('newOpReportCtrl', function (PatientAPI, ArztAPI, OpReportAPI, Upload) {
    var self = this;
    self.opReport = {};
    self.opReport.anhang = [{}];

    self.patientList = PatientAPI.query();
    self.docList = ArztAPI.query();

    self.upload = function (file, index) {
        Upload.upload({
            url : '/alfresco/service/api/fileUpload',
            data : { file : file }
        }).then(function (response) {
            self.opReport.anhang[index].arbeitsschrittAnhang = response.data.status;
            console.log(response.data.status);
        });
    };

    self.addAnhang = function () {
        self.opReport.anhang.push({});
    };

    self.removeAnhang = function () {
        self.opReport.anhang.pop();
    };

    self.submitNewOpReport = function () {

        self.output = JSON.stringify(self.opReport);
        console.log(self.opReport);

        OpReportAPI.save(self.opReport);
    };

});