var contentType = "mu:opBericht";

var properties = [];

var status = {
    "status":"error"
};

if(json.has("patientenVorname"))
    status.status = "vorname";

if (json.has("patientenSVNR") && json.has("aerzte") && json.has("opDatum")) {


    if (json.has("Anmerkung"))
        properties['mu:Anmerkung'] =  json.get("anmerkung");


    var opId = search.luceneSearch("TYPE:\"mu:opBericht\"").length;
    var opBericht = companyhome.createNode("opBericht_" + opId, contentType,properties);

    //patient muss gesetzt sein
    var patient = search.luceneSearch("@cm\\:name:\"" + json.get("patientenSVNR") + "\"")[0];
    opBericht.createAssociation(patient, "mu:Patient");

    //mindestens ein arzt
    var arzt;
    for(arztId in JSON.parse(json.getJSONArray("aerzte"))){
        arzt = search.luceneSearch("@cm\\:name:\"" + arztId + "\"")[0];
        opBericht.createAssociation(arzt, "mu:Aerzte");
    }


     //optionale anhaenge
     if(json.has("anhang")){
        var anhaenge = JSON.parse(json.getJSONArray("anhang"));
        for(anhang in anhaenge){

            var arbeitsschritt;
            if(anhaenge[anhang].hasOwnProperty("arbeitsschrittAnhang")){
                //Bild assozieren
                arbeitsschritt = search.findNode(anhaenge[anhang].arbeitsschrittAnhang);

            }else{
                arbeitsschritt = companyhome.createNode(opBericht.name + "_Schrittnummer_" + anhang,"mu:Arbeitsschritt");
            }

            if(anhaenge[anhang].hasOwnProperty("arbeitsschrittAnmerkung")){
                status.ausgabe = anhaenge[anhang].arbeitsschrittAnmerkung;
                arbeitsschritt.properties["mu:ArbeitsschrittAnmerkung"] = anhaenge[anhang].arbeitsschrittAnmerkung;
                arbeitsschritt.save();
            }


            opBericht.createAssociation(arbeitsschritt,"mu:Anhang");
        }
     }




    if(opBericht)
        status.status = "ok";
    //status.status = opBericht.assocs;
}

model.status = jsonUtils.toJSONString(status);