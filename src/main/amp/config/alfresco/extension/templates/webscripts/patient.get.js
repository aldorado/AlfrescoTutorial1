/**
 * Created by Marbach on 20.11.2015.
 */
var contentType = "mu:patientenStammblatt";
var documentName = url.templateArgs.documentName;

var properties = [];

/*properties['mu:patientenGebDat'] = 'Franz';
properties['mu:patientenSVNR'] = 'Gott';
properties['mu:patientenVersicherung'] = 'Hase';
properties['mu:patientenVName'] = 'Gott';
properties['mu:patientenMName'] = 'Gott';
properties['mu:patientenNName'] = 'Gott';
properties['mu:patientenStrasse'] = 'Gott';
properties['mu:patientenPLZ'] = 'Gott';
properties['mu:patientenGeschlecht'] = 'Gott';
properties['mu:patientenBlutgruppe'] = 'Gott';
properties['mu:patientenRhesusfaktor'] = 'Gott';
properties['mu:patientenAnmerkungen'] = 'Gott';*/

var document = companyhome.createNode(documentName, contentType);

if (document != null){
    model.document = document;
    model.msg = "Created OK!";


}
else {
    model.msg = "Failed to create document!";
}