/**
 * Created by Marbach on 20.11.2015.
 */

//var patienten = search.luceneSearch("TYPE:\"mu:patientenStammblatt\"");

var id = url.templateArgs.id;

var contentType = "mu:patientenStammblatt";

var properties = [];

var status = {
    "status":"error"
};

if(json.has("patientenVorname"))
    status.status = "vorname";

if (json.has("patientenVorname") && json.has("patientenNachname") && json.has("patientenGebDat") && json.has("patientenSVNR") && json.has("patientenVersicherung") && json.has("patientenStrasse") && json.has("patientenPLZ") && json.has("patientenOrt") && json.has("patientenGeschlecht")) {

    //müssen gesetzt werden
    properties['mu:patientenGebDat'] = json.get("patientenGebDat");
    properties['mu:patientenSVNR'] = json.get("patientenSVNR");
    properties['mu:patientenVersicherung'] = json.get("patientenVersicherung");
    properties['mu:patientenVorname'] = json.get("patientenVorname");
    properties['mu:patientenNachname'] = json.get("patientenNachname");
    properties['mu:patientenStrasse'] = json.get("patientenStrasse");
    properties['mu:patientenPLZ'] = json.get("patientenPLZ");
    properties['mu:patientenOrt'] = json.get("patientenOrt");
    properties['mu:patientenGeschlecht'] = json.get("patientenGeschlecht");


    //optionale Felder
    if (json.has("patientenMittelname"))
        properties['mu:patientenMName'] =  json.get("patientenMName");

    if (json.has("patientenBlutgruppe"))
        properties['mu:patientenBlutgruppe'] =  json.get("patientenBlutgruppe");

    if (json.has("patientenRhesusfaktor"))
        properties['mu:patientenRhesusfaktor'] =  json.get("patientenRhesusfaktor");

    if (json.has("patientenAnmerkungen"))
        properties['mu:patientenAnmerkungen'] =  json.get("patientenAnmerkungen");

    status.status = json.get("patientenSVNR");

    var patient = companyhome.createNode(json.get("patientenSVNR"), contentType, properties);

    if(patient)
        status.status = "ok";

}

model.status = jsonUtils.toJSONString(status);