/**
 * Created by Marbach on 20.11.2015.
 */

//var patienten = search.luceneSearch("TYPE:\"mu:patientenStammblatt\"");

var contentType = "mu:patientenStammblatt";

var properties = [];

var status = {
    "status":"error"
};


if (json.has("patientenVname") && json.has("patientenNname") && json.has("patientenGebDat") && json.has("patientenSVNR") && json.has("patientenVersicherung") && json.has("patientenStrasse") && json.has("patientenPLZ") && json.has("patientenGeschlecht")) {

    //müssen gesetzt werden
    properties['mu:patientenGebDat'] = json.get("patientenGebDat");
    properties['mu:patientenSVNR'] = json.get("patientenSVNR");
    properties['mu:patientenVersicherung'] = json.get("patientenVersicherung");
    properties['mu:patientenVName'] = json.get("patientenVname");
    properties['mu:patientenNName'] = json.get("patientenNname");
    properties['mu:patientenStrasse'] = json.get("patientenStrasse");
    properties['mu:patientenPLZ'] = json.get("patientenPLZ");
    properties['mu:patientenGeschlecht'] = json.get("patientenGeschlecht");


    //optionale Felder
    if (json.has("patientenMName"))
        properties['mu:patientenMName'] =  json.get("patientenMName");

    if (json.has("patientenBlutgruppe"))
        properties['mu:patientenBlutgruppe'] =  json.get("patientenBlutgruppe");

    if (json.has("patientenRhesusfaktor"))
        properties['mu:patientenRhesusfaktor'] =  json.get("patientenRhesusfaktor");

    if (json.has("patientenAnmerkungen"))
        properties['mu:patientenAnmerkungen'] =  json.get("patientenAnmerkungen");


    var patient = companyhome.createNode(json.get("patientenVersicherung"), contentType, properties);

    if(patient)
        status.status = "ok";
}

model.status = jsonUtils.toJSONString(status);


/*var contentType = "mu:patientenStammblatt";
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
 properties['mu:patientenAnmerkungen'] = 'Gott';

var document = companyhome.createNode(documentName, contentType);

if (document != null){
    model.document = document;
    model.msg = "Created OK!";


}
else {
    model.msg = "Failed to create document!";
}*/