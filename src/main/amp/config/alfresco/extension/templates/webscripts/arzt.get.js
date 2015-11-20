var contentType = "mu:aerzteregisterkarte";
var documentName = url.templateArgs.documentName;

var properties = [];

properties['mu:arztVorname'] = 'Franz';
properties['mu:arztNachname'] = 'Gott';
properties['mu:arztFachbereich'] = ['Affe', 'Hase'];

var document = companyhome.createNode(documentName, contentType, properties);

if (document != null){
    model.document = document;
    model.msg = "Created OK!";
}
else {
    model.msg = "Failed to create document!";
}