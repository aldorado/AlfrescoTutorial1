var contentType = "mu:opBericht";

var properties = [];

var status = {
    "status":"error"
};

if(json.has("patientenVorname"))
    status.status = "vorname";

if (json.has("patientenSVNR") && json.has("Aerzte") && json.has("opDatum")) {

    /*/patienten suche
    var patientenSVNR = json.get("patientenSVNR");
    var patient;
    var patienten = search.luceneSearch("TYPE:\"mu:patientenStammblatt\"");

    for (i in patienten)
        if (patienten[i].name == patientenSVNR)
            patient = patienten[i];

    //arzt suche
    var arztId = json.get("ArztID");
    var arzt;
    var aerzte = search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\"");

    for (i in aerzte)
        if (aerzte[i].name == arztId)
            arzt = aerzte[i];
*/

    //müssen gesetzt werden
    properties['mu:opDatum'] = json.get("opDatum");


    //optionale Felder
    if (json.has("Anmerkung"))
        properties['mu:Anmerkung'] =  json.get("Anmerkung");


    var opId = search.luceneSearch("TYPE:\"mu:opBericht\"").length;
    var opBericht = companyhome.createNode("opBericht_" + opId, contentType,properties);

    //patient muss gesetzt sein
    var patient = search.luceneSearch("@cm\\:name:\"" + json.get("patientenSVNR") + "\"")[0];
    opBericht.createAssociation(patient, "mu:Patient");

    //mindestens ein arzt
    var arzt;
    for(arztId in JSON.parse(json.getJSONArray("Aerzte"))){
        arzt = search.luceneSearch("@cm\\:name:\"" + arztId + "\"")[0];
        opBericht.createAssociation(arzt, "mu:Aerzte");
    }


     //optionale anhaenge
     if(json.has("Anhang")){
        var anhaenge = JSON.parse(json.getJSONArray("Anhang"));
        for(anhang in anhaenge){
            // anmProperties = [];
            if(anhaenge[anhang].hasOwnProperty("ArbeitsschrittAnmerkung")){
                var anmProperties = [];
                anmProperties["mu:ArbeitsschrittAnmerkung"] = anhaenge[anhang].ArbeitsschrittAnmerkung;

            }
            if(anhaenge[anhang].hasOwnProperty("ArbeitsschrittAnhang")){
                //Bild assozieren
                var img = search.findNode(anhaenge[anhang].ArbeitsschrittAnhang);
            }
            if(anmProperties){
                var arbeitsschritt = companyhome.createNode(opBericht.name + "_Schrittnummer_" + anhang,"mu:Arbeitsschritt",anmProperties);
            }else{
                var arbeitsschritt = companyhome.createNode(opBericht.name + "_Schrittnummer_" + anhang,"mu:Arbeitsschritt");
            }
            if(img){
                arbeitsschritt.createAssociation(img,"sys:base");
            }
            opBericht.createAssociation(arbeitsschritt,"mu:Anhang");
        }
     }




    if(opBericht)
        status.status = "ok";
    //status.status = opBericht.assocs;
}

model.status = jsonUtils.toJSONString(status);